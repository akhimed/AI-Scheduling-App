# 🧠 AI Scheduling App (WorkSync)

A fullstack intelligent scheduling platform for businesses, built using:
- 🔮 OpenAI GPT for AI-based schedule optimization
- 🧰 Flask (Python) backend with MySQL
- 📅 FullCalendar.js for schedule visualization
- 📊 Chart.js analytics dashboard
- ✨ Responsive, modern UI with vanilla JS/CSS

## 🚀 Features

- AI-generated shift scheduling based on availability
- Manual shift management (add/remove/edit)
- Role-based access for owners vs employees
- Shift swap requests & approvals
- Analytics dashboard (shifts, hours, coverage, swap stats)
- Email notifications on schedule updates
- Full mobile responsiveness

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript, FullCalendar.js, Chart.js
- **Backend:** Flask, Python, OpenAI API, MySQL
- **Deployment:** AWS EC2 (Ubuntu), Gunicorn, Nginx

## 📁 Project Structure
📦 AI-Scheduling-App
 ├── backend/  <br>
 │ ├── app.py  <br>
 │ ├── scheduler.py <br>
 │ ├── database.py <br>
 │ ├── requirements.txt <br>
 ├── frontend/ <br>
 │ ├── *.html <br>
 │ ├── script.js <br>
 │ ├── styles.css <br>
 ├── .gitignore <br>

## 📌 Setup Instructions

### 1. Clone the repo:
git clone https://github.com/akhimed/AI-Scheduling-App.git

  ### 2. Set up your backend:
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt

### 3. Configure your .env file:
OPENAI_API_KEY=your-key <br>
DB_HOST=localhost <br>
DB_USER=root <br>
DB_PASSWORD=your-password <br>
DB_NAME=worksync <br>

### 4. Run the Flask app:
python app.py

### 5. View the frontend:
Open frontend/landing.html in your browser or set up a Flask static route.

### 📬 Contact
Made by @akhimed – built for educational purposes (George Mason University Capstone Project)
