document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        drawShiftsPerEmployee(),
        drawTotalHoursWorked(),
        drawShiftsPerDay(),
        drawCoveragePerDay(),
        drawSwapRequestStats()
    ]);
});

// 📊 Shifts per Employee
async function drawShiftsPerEmployee() {
    const res = await fetch("/metrics/shifts_per_employee");
    const data = await res.json();

    const ctx = document.getElementById("shiftsPerEmployeeChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                label: "Shifts",
                data: data.map(d => d.count),
                backgroundColor: "#4e73df"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// ⏱️ Total Hours Worked
async function drawTotalHoursWorked() {
    const res = await fetch("/metrics/hours_worked");
    const data = await res.json();

    const ctx = document.getElementById("totalHoursChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map(d => d.name),
            datasets: [{
                label: "Hours Worked",
                data: data.map(d => d.hours),
                backgroundColor: "#1cc88a"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// 📅 Shifts Per Day
// ✅ All draw functions should go first

// 📅 Shifts Per Day
async function drawShiftsPerDay() {
    const res = await fetch("/metrics/shifts_per_day");
    const data = await res.json();


    const ctx = document.getElementById("shiftsPerDayChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: data.map(d => d.date),
            datasets: [{
                label: "Shifts per Day",
                data: data.map(d => d.count),
                borderColor: "#36b9cc",
                backgroundColor: "rgba(54, 185, 204, 0.2)",
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
        }
    });
}

// 🟩 Shift Coverage Per Day
async function drawCoveragePerDay() {
    const res = await fetch("/metrics/coverage_per_day");
    const data = await res.json();


    const ctx = document.getElementById("coverageChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map(d => d.date),
            datasets: [{
                label: "Employees Scheduled",
                data: data.map(d => d.employees),
                backgroundColor: "#f6c23e"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}








// 🔄 Swap Request Statistics
async function drawSwapRequestStats() {
    const res = await fetch("/metrics/swap_stats");
    const data = await res.json();

    const ctx = document.getElementById("swapStatsChart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Pending", "Accepted", "Rejected"],
            datasets: [{
                data: [data.pending, data.accepted, data.rejected],
                backgroundColor: ["#4e73df", "#1cc88a", "#e74a3b"]
            }]
        },
        options: {
            responsive: true,
        }
    });
}
