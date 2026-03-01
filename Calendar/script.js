const monthYear = document.getElementById("monthYear");
    const datesContainer = document.getElementById("dates");

    let currentDate = new Date();

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        const today = new Date();

        monthYear.innerText = currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric"
        });

        datesContainer.innerHTML = "";

        for (let i = 0; i < firstDay; i++) {
            datesContainer.innerHTML += "<div></div>";
        }

        for (let i = 1; i <= lastDate; i++) {
            let dateDiv = document.createElement("div");
            dateDiv.innerText = i;

            if (
                i === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
            ) {
                dateDiv.classList.add("today");
            }

            datesContainer.appendChild(dateDiv);
        }
    }

    function changeMonth(direction) {
        currentDate.setMonth(currentDate.getMonth() + direction);
        renderCalendar();
    }

    renderCalendar();