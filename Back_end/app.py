# app.py
from flask import Flask, request, jsonify, session
from database import init_db, get_db
import hashlib
import os

app = Flask(__name__)
app.secret_key = 'your-secret-key'  # Use a strong, random key

@app.before_first_request
def setup():
    init_db()

# Hash function
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Helper to check if user is logged in
def is_logged_in():
    return 'user_id' in session

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data['email']
    password = hash_password(data['password'])
    
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    if cursor.fetchone():
        return jsonify({'message': 'Email already exists'}), 400

    cursor.execute("INSERT INTO users (email, password) VALUES (?, ?)", (email, password))
    db.commit()
    return jsonify({'message': 'User registered successfully'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = hash_password(data['password'])

    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT id FROM users WHERE email = ? AND password = ?", (email, password))
    user = cursor.fetchone()

    if user:
        session['user_id'] = user[0]
        return jsonify({'message': 'Logged in'})
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'message': 'Logged out'})

@app.route('/items', methods=['GET'])
def get_items():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT id, name, description, owner_id FROM items")
    items = cursor.fetchall()
    return jsonify([{'id': i[0], 'name': i[1], 'description': i[2], 'owner_id': i[3]} for i in items])

@app.route('/items', methods=['POST'])
def add_item():
    if not is_logged_in():
        return jsonify({'message': 'Unauthorized'}), 401

    data = request.get_json()
    name = data['name']
    desc = data.get('description', '')

    db = get_db()
    cursor = db.cursor()
    cursor.execute("INSERT INTO items (name, description, owner_id) VALUES (?, ?, ?)", (name, desc, session['user_id']))
    db.commit()
    return jsonify({'message': 'Item added'})

@app.route('/my-items', methods=['GET'])
def my_items():
    if not is_logged_in():
        return jsonify({'message': 'Unauthorized'}), 401

    db = get_db()
    cursor = db.cursor()
    cursor.execute("SELECT id, name, description FROM items WHERE owner_id = ?", (session['user_id'],))
    items = cursor.fetchall()
    return jsonify([{'id': i[0], 'name': i[1], 'description': i[2]} for i in items])

if __name__ == '__main__':
    app.run(debug=True)
