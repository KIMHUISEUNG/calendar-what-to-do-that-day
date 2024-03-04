let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document.querySelector(".calendar-current-date");

const prenexIcons = document.querySelectorAll(".calendar-navigation span");

const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const manipulate = () => {
  let dayone = new Date(year, month, 1).getDay();

  let lastdate = new Date(year, month + 1, 0).getDate();

  let dayend = new Date(year, month, lastdate).getDay();

  let monthlastdate = new Date(year, month, 0).getDate();

  let lit = "";

  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  }

  for (let i = 1; i <= lastdate; i++) {
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`;
  }

  currdate.innerText = `${year}년 ${months[month]}`;

  day.innerHTML = lit;
};

manipulate();

prenexIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    month = icon.id === "calendar-prev" ? month - 1 : month + 1;

    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());

      year = date.getFullYear();

      month = date.getMonth();
    } else {
      date = new Date();
    }

    manipulate();
  });
});

//날짜를 클릭하면 하얗게 원만들어 선택했다는 것을 알려주기
//날짜를 선택하면 day todo list가 보이게 하기
//다른 날짜를 선택하면 day todo list가 초기화 되게하기

// const cal = document.getElementsByTagName("calendar-dates");

// cal.getElementsByTagName("li").addEventListener("click", function (event) {
//   const myTodoList = document.getElementsByClassName("day-todolist");

//   if (myTodoList.style.display === "none") {
//     myTodoList.style.display = "block";
//   } else {
//     myTodoList.style.display = "none";
//   }
//   console.log("click");
// });
