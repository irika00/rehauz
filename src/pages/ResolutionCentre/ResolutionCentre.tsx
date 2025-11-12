// src/pages/ResolutionCentre/ResolutionCentre.tsx
import React, { useState } from 'react';
import './ResolutionCentre.css';

function ResolutionCentre() {
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample purchased items (later will come from backend)
  const purchasedItems = [
    {
      id: 1,
      name: 'Vintage Denim Jacket',
      price: 45,
      image: 'https://picsum.photos/300/200?random=10',
      orderId: 'ORD-12345',
      purchaseDate: '2024-11-01'
    },
    {
      id: 2,
      name: 'Floral Summer Dress',
      price: 30,
      image: 'https://picsum.photos/300/200?random=11',
      orderId: 'ORD-12346',
      purchaseDate: '2024-10-28'
    },
  ];

  const issueOptions = [
    {
      title: 'Seller is not responding',
      description: 'Menu description.'
    },
    {
      title: 'I have not received my item',
      description: 'Menu description.'
    },
    {
      title: 'Item is not as described',
      description: 'Menu description.'
    },
    {
      title: 'Order not shipped',
      description: 'Menu description.'
    },
    {
      title: 'Other',
      description: 'Menu description.'
    }
  ];

  const handleRaiseIssue = (item) => {
    setSelectedItem(item);
    setShowIssueModal(true);
  };

  const handleIssueSelect = (issue) => {
    console.log('Issue selected:', issue, 'for item:', selectedItem);
    // Here you would handle the issue submission
    alert(`Issue raised: ${issue.title}`);
    setShowIssueModal(false);
  };

  const closeModal = () => {
    setShowIssueModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="resolution-centre">
      <h1 className="page-title">Purchases</h1>

      <div className="purchases-container">
        {/* Left side - Purchased items */}
        <div className="purchases-list">
          {purchasedItems.map((item) => (
            <div key={item.id} className="purchase-card">
              <div className="purchase-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="purchase-details">
                <h3 className="purchase-name">{item.name}</h3>
                <p className="purchase-price">${item.price}</p>
                <button 
                  className="raise-issue-button"
                  onClick={() => handleRaiseIssue(item)}
                >
                  Raise an Issue
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Issue options (shown when modal is open) */}
        {showIssueModal && (
          <>
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="issue-options-panel">
              <h2 className="issue-panel-title">Select an Issue</h2>
              {issueOptions.map((issue, index) => (
                <div 
                  key={index} 
                  className="issue-option"
                  onClick={() => handleIssueSelect(issue)}
                >
                  <h3 className="issue-title">{issue.title}</h3>
                  <p className="issue-description">{issue.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ResolutionCentre;