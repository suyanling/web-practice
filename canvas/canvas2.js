const canvas = document.getElementById('canvas');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const context = canvas.getContext("2d");

const CirclePositions = [];

function init() {
    for (let i = 0; i < 100; i++) {
        let radius = 50;
        let centerX = Math.max(parseInt(Math.random() * (canvasWidth - radius)), radius + 10);
        let centerY = Math.max(parseInt(Math.random() * (canvasHeight - radius)), radius + 10);
        CirclePositions.push({x: centerX, y: centerY, r: radius});
        render();
    }
}

function render() {
    context.beginPath();
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    CirclePositions.map((item, index) => {
        context.beginPath();
        context.arc(item.x, item.y, item.r, 0, 2 * Math.PI);
        context.strokeStyle = `rgba(0, 189, 212, 1)`;
        context.fillStyle = `rgba(255, 255, 255, 1)`;
        context.fill();
        context.stroke();
    });
}

function reRenderCircle(current) {
    
    // 清除当前的点击圆的区域
    context.save()
    context.beginPath();
    context.arc(current.x, current.y, current.r+1, 0, 2 * Math.PI);
    context.clip();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();

    // // 重新绘制圆，使其在最前面
    context.beginPath();
    context.arc(current.x, current.y, current.r, 0, 2 * Math.PI);
    context.strokeStyle = `rgba(255, 189, 212, 1)`;
    context.fillStyle = `rgba(255, 189, 212, 1)`;
    context.fill();
    context.stroke();
}

// CirclePositions 加入的先后顺序也就是circle渲染的先后顺序
canvas.addEventListener('click', function (e) {
    let currentIndex = 0;
    let validClick = false;
    CirclePositions.map((item, index) => {
        let distance = Math.sqrt(Math.pow(item.x - e.x, 2) + Math.pow(item.y - e.y, 2));
        if (distance < item.r) { // 点击点在圆内,有效点击
            currentIndex = Math.max(currentIndex, index);
            validClick = true;
        }
    })
    if (validClick) {
        reRenderCircle(CirclePositions[currentIndex])
    }
})
init();
