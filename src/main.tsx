import React from 'react'
import ReactDOM from 'react-dom/client'
import './external/assets/styles/index.css'
import ExpenseListPage from "./external/view/pages/ExpenseListPage.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExpenseListPage />
  </React.StrictMode>,
)
