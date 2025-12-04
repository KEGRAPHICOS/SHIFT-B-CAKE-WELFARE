
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

// Filter table rows while typing
searchInput.addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#welfareTable tbody tr");

    rows.forEach(row => {
        let name = row.cells[0].textContent.toLowerCase();
        row.style.display = name.includes(filter) ? "" : "none";
    });

    // Show × only when there’s text
    clearBtn.style.display = this.value ? "block" : "none";
});

// Clear input when × is clicked
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";

    // Reset all rows to visible
    let rows = document.querySelectorAll("#welfareTable tbody tr");
    rows.forEach(row => {
        row.style.display = "";
    });

    searchInput.focus();
});
