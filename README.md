# 🚀 SmartTracking - Personal Budget Tracker

A modern **personal finance tracker** to help individuals easily manage their expenses, visualize spending habits, and track their financial goals.

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| **Frontend** | React, React Router, MUI (Material UI) |
| **Backend**  | ASP.NET Core (.NET 9) with Onion Architecture |
| **Database** | SQLite, Entity Framework Core (EF Core) |
| **Open Banking Integration** | Planned: Nordigen / GoCardless (Open Banking APIs) |

---

## 🎯 Key Features
- **User authentication** (Register / Login)
- **Connect bank accounts** via Open Banking
- **Automatically fetch transactions** from connected accounts
- **Categorize transactions** (Groceries, Clothing, Utilities, etc.)
- **Visual dashboard** with latest transactions, category breakdown, and insights
- **Export / Reporting tools**
- **Clean & responsive UI** using MUI

---
## 💡 How it Works
1. User registers and logs in.
2. On the dashboard, user can **connect bank accounts**.
3. The app uses **Open Banking APIs** to fetch **transactions**.
4. Transactions are **categorized automatically**.
5. User can view reports, spending trends, and financial stats.

---

## 📝 Future Improvements
- Machine Learning for smarter transaction categorization
- Notifications / Budget limits
- **AI Financial Assistant (Chatbot)**  
    - User can chat with an AI to ask questions like:  
        - "Where do I spend most of my money?"  
        - "How can I save more this month?"  
        - "Can you help me build a saving or investment plan?"  
        - "Give me suggestions to optimize my expenses."
    - AI assistant will analyze the user's financial data and provide personalized insights, savings strategies, and budgeting tips.
    - Potential tech: OpenAI GPT, LangChain, RAG over user transaction history.

