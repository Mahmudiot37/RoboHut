import React, { useState } from "react";

const CategoryPage = () => {
  const [expanded, setExpanded] = useState({});

  // Toggle the category expansion
  const toggleCategory = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Sample categories and subcategories
  const categories = [
    { name: "Development Boards" },
    { name: "Raspberry Pi" },
    { name: "Mini Computer/ PC" },
    { name: "3D Printer" },
    {
      name: "Sensors",
      subcategories: ["Temperature Sensors", "Motion Sensors", "Light Sensors"],
    },
    { name: "Internet of Things (IoT)" },
    { name: "Home Automation" },
    {
      name: "Learning Kit",
      subcategories: ["Robotics Kit", "Programming Kit"],
    },
    { name: "Arduino Shield & Module" },
    { name: "Soldering Accessories" },
    { name: "Robotics Parts" },
    { name: "Quadcopter" },
    { name: "Artificial Intelligence (AI)" },
  ];

  return (
    <div className="category-page">
      <h3>MENU CATEGORIES</h3>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <div className="category-header">
              <span>{category.name}</span>
              {category.subcategories && (
                <button
                  className="expand-button"
                  onClick={() => toggleCategory(category.name)}
                >
                  {expanded[category.name] ? "-" : "+"}
                </button>
              )}
            </div>
            {category.subcategories && expanded[category.name] && (
              <ul className="subcategory-list">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className="subcategory-item">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Add some styles for a better look */}
      <style>
        {`
          .category-page {
            font-family: Arial, sans-serif;
            max-width: 300px;
            margin: auto;
          }
          .category-list {
            list-style: none;
            padding: 0;
          }
          .category-item {
            margin: 10px 0;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
          }
          .category-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .expand-button {
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
          }
          .subcategory-list {
            list-style: none;
            padding-left: 20px;
          }
          .subcategory-item {
            margin: 5px 0;
          }
        `}
      </style>
    </div>
  );
};

export default CategoryPage;
