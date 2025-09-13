const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const calendar = document.getElementById("calendar");

    // * Insert weekday headers
    days.forEach(d => {
      let div = document.createElement("div");
      div.classList.add("day");
      div.textContent = d;
      calendar.appendChild(div);
    });

    // * Example schedule data
    const schedules = {
      "2025-09-12": [
        { title: "Biology Class", time: "10:00 - 11:00" },
        { title: "Math Revision", time: "13:00 - 14:00" }
      ],
      "2025-09-15": [
        { title: "English Lesson", time: "09:00 - 10:30" },
        { title: "Lunch Break", time: "12:00 - 13:00" }
      ]
    };

    // * Render September 2025
    let year = 2025, month = 8; // (JS months start at 0, so 8 = September)
    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month+1, 0).getDate();

    // * Fill empty slots before 1st day
    for (let i=0; i<firstDay; i++) {
      let div = document.createElement("div");
      calendar.appendChild(div);
    }

    // * Generate dates
    for (let d=1; d<=lastDate; d++) {
      let div = document.createElement("div");
      div.classList.add("date");
      div.textContent = d;

      let dateKey = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

      div.addEventListener("click", () => {
        document.querySelectorAll(".date").forEach(el => el.classList.remove("active"));
        div.classList.add("active");
        showSchedule(dateKey);
      });

      calendar.appendChild(div);
    }

    // * Show schedule function
    function showSchedule(dateKey) {
      const list = document.getElementById("scheduleList");
      list.innerHTML = "";
      if (schedules[dateKey]) {
        schedules[dateKey].forEach(item => {
          let div = document.createElement("div");
          div.classList.add("schedule-item");
          div.innerHTML = `<strong>${item.title}</strong><br><span class="time">${item.time}</span>`;
          list.appendChild(div);
        });
      } else {
        list.innerHTML = "<p>No events for this date.</p>";
      }
    }


