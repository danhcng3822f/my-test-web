const API_URL = 'https://my-test-api-dun.vercel.app/';  // Thay bằng URL API của bạn (Vercel hoặc Termux)

document.addEventListener('DOMContentLoaded', () => {
    // GET Hello
    const btnHello = document.getElementById('btnHello');
    const resultHello = document.getElementById('resultHello');
    
    btnHello.addEventListener('click', async () => {
        try {
            const response = await fetch(`${API_URL}/api/hello`);
            const data = await response.json();
            resultHello.innerHTML = `<strong>Kết quả:</strong> ${JSON.stringify(data, null, 2)}`;
        } catch (error) {
            resultHello.innerHTML = `<strong>Lỗi:</strong> ${error.message}`;
        }
    });
    
    // POST Echo
    const btnEcho = document.getElementById('btnEcho');
    const inputText = document.getElementById('inputText');
    const resultEcho = document.getElementById('resultEcho');
    
    btnEcho.addEventListener('click', async () => {
        const text = inputText.value.trim();
        if (!text) {
            resultEcho.innerHTML = '<strong>Lỗi:</strong> Vui lòng nhập text!';
            return;
        }
        
        try {
            const response = await fetch(`${API_URL}/api/echo`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            const data = await response.json();
            resultEcho.innerHTML = `<strong>Kết quả:</strong> ${JSON.stringify(data, null, 2)}`;
        } catch (error) {
            resultEcho.innerHTML = `<strong>Lỗi:</strong> ${error.message}`;
        }
    });
});
