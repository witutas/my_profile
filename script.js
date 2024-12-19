let data = [
    ['customer_id', 'age', 'gender', 'product', 'purchase_value', 'purchase_date'],
    [1, 25, 'Male', 'Laptop', 1000, '2024-12-01'],
    [2, 34, 'Female', 'Smartphone', 800, '2024-12-03'],
    [3, 28, 'Female', 'Smartphone', 700, '2024-12-05'],
    [4, 40, 'Male', 'Laptop', 1200, '2024-12-06'],
    [5, 22, 'Female', 'Tablet', 500, '2024-12-07'],
    [6, 55, 'Male', 'Tablet', 400, '2024-12-08'],
    [7, 60, 'Male', 'Laptop', 1100, '2024-12-09'],
    [8, 30, 'Female', 'Smartphone', 750, '2024-12-10'],
    [9, 36, 'Male', 'Smartphone', 850, '2024-12-11'],
    [10, 45, 'Female', 'Tablet', 600, '2024-12-12']
];

function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'dataSci') {
        displayData();
    }
}

function displayData() {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    data.slice(1).forEach((row, index) => {
        const tr = document.createElement('tr');
        row.forEach((cell) => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'แก้ไข';
        editButton.onclick = () => editData(index + 1);
        const tdButton = document.createElement('td');
        tdButton.appendChild(editButton);
        tr.appendChild(tdButton);

        tableBody.appendChild(tr);
    });
}

function editData(rowIndex) {
    const rowData = data[rowIndex];
    const newAge = prompt('กรุณากรอกอายุใหม่', rowData[1]);
    const newProduct = prompt('กรุณากรอกผลิตภัณฑ์ใหม่', rowData[3]);
    const newPurchaseValue = prompt('กรุณากรอกมูลค่าการซื้อใหม่', rowData[4]);

    if (newAge && newProduct && newPurchaseValue) {
        data[rowIndex][1] = parseInt(newAge, 10);
        data[rowIndex][3] = newProduct;
        data[rowIndex][4] = parseFloat(newPurchaseValue);

        displayData();
    }
}

function calculateAveragePurchaseValue() {
    const total = data.slice(1).reduce((sum, row) => sum + row[4], 0);
    const count = data.slice(1).length;
    return total / count;
}

function calculateStandardDeviation() {
    const mean = calculateAveragePurchaseValue();
    const variance = data.slice(1).reduce((sum, row) => sum + Math.pow(row[4] - mean, 2), 0) / data.slice(1).length;
    return Math.sqrt(variance);
}

function showResultPopup(result) {
    document.getElementById('resultMessage').innerHTML = result;
    document.getElementById('resultPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}
// ฟังก์ชันแสดงข้อมูล Data Science Results ใน Popup
function showDataResults() {
    const resultMessage = `
        <table style="width:100%; border-collapse:collapse;">
            <thead>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px;">Customer ID</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Age</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Gender</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Product</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Purchase Value</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Purchase Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">12345</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">29</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Male</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Laptop</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">$1,200</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">2024-01-15</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">67890</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">34</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Female</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Smartphone</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">$800</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">2024-02-20</td>
                </tr>
            </tbody>
        </table>
    `;
    document.getElementById('resultMessage').innerHTML = resultMessage;
    document.getElementById('resultPopup').style.display = 'block';
}

// ฟังก์ชันปิด Popup
function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}
