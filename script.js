let timer;
let milliseconds = 0;
let isRunning = false;

function updateDisplay() {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    const ms = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
    document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}.${ms}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds += 10;
            updateAll();
        }, 10);
    }
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    pauseTimer();
    milliseconds = 0;
    updateAll();
}

const messageDiv = document.querySelector('.timer-container > div');
// 타이머 시작 전 문구 숨김
if (messageDiv) messageDiv.style.display = 'none';
const progressBar = document.getElementById('progress-bar');

// 진행바는 1시간(3600초) 기준으로 100%가 됨
function updateProgressBar() {
    const percent = Math.min((milliseconds / (3600 * 1000)) * 100, 100);
    if (progressBar) progressBar.style.width = percent + '%';
}

function updateAll() {
    updateDisplay();
    updateProgressBar();
}

document.getElementById('start').addEventListener('click', () => {
    startTimer();
    if (messageDiv) {
        messageDiv.style.display = 'block';
        messageDiv.style.color = '#1565c0'; // 파란색으로 변경
    }
    document.body.style.background = '#e3f2fd'; // 연한 하늘색
});
document.getElementById('pause').addEventListener('click', () => {
    pauseTimer();
    if (messageDiv) messageDiv.style.color = '#1565c0';
});
document.getElementById('reset').addEventListener('click', () => {
    resetTimer();
    if (messageDiv) messageDiv.style.color = '#1565c0';
});

// 페이지 로드시 초기화
updateAll();
            result.textContent = `정답! 시도 횟수: ${guessTries}`;

            result.style.color = '#43a047';

