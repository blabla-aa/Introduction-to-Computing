const payrollForm = document.getElementById('payrollForm');
        const payrollTable = document.getElementById('payrollTable').querySelector('tbody');

        let employees = [];

        payrollForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const daysWorked = parseInt(document.getElementById('daysWorked').value);
            const dailyRate = parseFloat(document.getElementById('dailyRate').value);
            const deduction = parseFloat(document.getElementById('deduction').value);

            const grossPay = daysWorked * dailyRate;
            const netPay = grossPay - deduction;

            const employee = {
                name,
                daysWorked,
                dailyRate,
                grossPay,
                deduction,
                netPay
            };

            employees.push(employee);
            updateTable();
            payrollForm.reset();
        });

        function updateTable() {
            payrollTable.innerHTML = '';
            employees.forEach((employee, index) => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td>${employee.daysWorked}</td>
                    <td>${employee.dailyRate.toFixed(2)}</td>
                    <td>${employee.grossPay.toFixed(2)}</td>
                    <td>${employee.deduction.toFixed(2)}</td>
                    <td>${employee.netPay.toFixed(2)}</td>
                    <td><button onclick="deleteEmployee(${index})">Delete</button></td>
                `;

                payrollTable.appendChild(row);
            });
        }

        function deleteEmployee(index) {
            employees.splice(index, 1);
            updateTable();
        }
