// 카풀 목록을 저장할 배열
let rides = [];

// 카풀 등록 함수
function addRide(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    const ride = { from, to, date, seats };
    rides.push(ride);

    displayRides();
    event.target.reset();
}

// 카풀 목록 표시 함수
function displayRides() {
    const ridesList = document.getElementById('rides-list');
    ridesList.innerHTML = '';

    rides.forEach((ride, index) => {
        const li = document.createElement('li');
        li.textContent = `${ride.from}에서 ${ride.to}까지 - ${ride.date} (잔여 좌석: ${ride.seats})`;
        ridesList.appendChild(li);
    });
}

// 이벤트 리스너 등록
document.getElementById('add-ride-form').addEventListener('submit', addRide);

// 초기 카풀 목록 표시
displayRides();