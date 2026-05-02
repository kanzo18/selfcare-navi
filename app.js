// ボタンクリック時の処理
function handleClick() {
    alert('セルフケア・ナビゲーションへようこそ。\n\n心と身体の健康管理を始めましょう。\n記録と分析で、より良い毎日をサポートします。');
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    console.log('セルフケア・ナビゲーション - 心と身体の健康管理プラットフォーム');
});

