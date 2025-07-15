// 高校生研修旅行サイト - JavaScript

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeInteractions();
    loadSavedData();
    setupChecklistSaving();
});

// 基本的なインタラクション機能の初期化
function initializeInteractions() {
    // スムーススクロール
    setupSmoothScrolling();
    
    // モバイルメニュー対応
    setupMobileMenu();
    
    // 現在時刻の表示
    updateCurrentTime();
    
    // アニメーション効果
    setupAnimations();
}

// スムーススクロール機能
function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// モバイルメニューの設定
function setupMobileMenu() {
    // モバイル表示時のハンバーガーメニュー対応
    const nav = document.querySelector('nav');
    if (nav && window.innerWidth <= 768) {
        nav.classList.add('mobile-nav');
    }
    
    // ウィンドウリサイズ対応
    window.addEventListener('resize', function() {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.innerWidth <= 768) {
                nav.classList.add('mobile-nav');
            } else {
                nav.classList.remove('mobile-nav');
            }
        }
    });
}

// 現在時刻の更新
function updateCurrentTime() {
    const timeElements = document.querySelectorAll('.current-time');
    if (timeElements.length > 0) {
        const now = new Date();
        const timeString = now.toLocaleString('ja-JP');
        timeElements.forEach(element => {
            element.textContent = timeString;
        });
    }
}

// カードのアニメーション効果
function setupAnimations() {
    const cards = document.querySelectorAll('.card, .participant-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 参加者編集機能
function editParticipant(participantId) {
    const isConfirmed = confirm('参加者情報を編集しますか？\n（実際の編集機能は管理者向けの詳細実装が必要です）');
    if (isConfirmed) {
        alert(`${participantId}の編集画面を開きます。\n\n※この機能は将来のバージョンで実装予定です。\n現在は管理者にお問い合わせください。`);
    }
}

// 新しい参加者の追加
function addNewParticipant() {
    const isConfirmed = confirm('新しい参加者を追加しますか？\n（管理者権限が必要です）');
    if (isConfirmed) {
        alert('新規参加者追加フォームを開きます。\n\n※この機能は将来のバージョンで実装予定です。\n現在は管理者にお問い合わせください。');
    }
}

// チェックリストの保存機能
function setupChecklistSaving() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            saveChecklistState();
        });
    });
}

// チェックリストの状態をローカルストレージに保存
function saveChecklistState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checklistData = {};
    
    checkboxes.forEach(checkbox => {
        if (checkbox.id) {
            checklistData[checkbox.id] = checkbox.checked;
        }
    });
    
    localStorage.setItem('tripChecklist', JSON.stringify(checklistData));
}

// 保存されたデータの読み込み
function loadSavedData() {
    // チェックリストの状態を復元
    const savedChecklist = localStorage.getItem('tripChecklist');
    if (savedChecklist) {
        const checklistData = JSON.parse(savedChecklist);
        Object.keys(checklistData).forEach(itemId => {
            const checkbox = document.getElementById(itemId);
            if (checkbox) {
                checkbox.checked = checklistData[itemId];
            }
        });
    }
}

// チェックリストの進捗表示
function updateChecklistProgress() {
    const checkboxes = document.querySelectorAll('#packing input[type="checkbox"]');
    const checkedBoxes = document.querySelectorAll('#packing input[type="checkbox"]:checked');
    
    if (checkboxes.length > 0) {
        const progress = Math.round((checkedBoxes.length / checkboxes.length) * 100);
        
        // 進捗表示要素があれば更新
        const progressElement = document.querySelector('.checklist-progress');
        if (progressElement) {
            progressElement.textContent = `持ち物準備進捗: ${progress}% (${checkedBoxes.length}/${checkboxes.length})`;
        }
    }
}

// 検索機能（参加者リスト用）
function searchParticipants() {
    const searchTerm = prompt('参加者を検索してください（名前を入力）:');
    if (searchTerm) {
        const participants = document.querySelectorAll('.participant-card');
        let found = false;
        
        participants.forEach(card => {
            const nameElement = card.querySelector('.participant-name');
            if (nameElement) {
                const name = nameElement.textContent;
                if (name.includes(searchTerm)) {
                    card.style.backgroundColor = '#fff3cd';
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    found = true;
                } else {
                    card.style.backgroundColor = '';
                }
            }
        });
        
        if (!found) {
            alert(`「${searchTerm}」に該当する参加者が見つかりませんでした。`);
        }
    }
}

// 印刷対応
function printPage() {
    window.print();
}

// 外部リンクの警告
function setupExternalLinkWarning() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const isConfirmed = confirm('外部サイトを開きます。よろしいですか？\n\nURL: ' + this.href);
            if (!isConfirmed) {
                e.preventDefault();
            }
        });
    });
}

// 緊急連絡先のクイックダイヤル（モバイル対応）
function quickDial(phoneNumber) {
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumber}`;
    } else {
        alert(`緊急連絡先: ${phoneNumber}\n\nモバイル端末では自動的に電話アプリが起動します。`);
    }
}

// データエクスポート機能（将来実装用）
function exportData() {
    alert('データエクスポート機能は開発中です。\n\n現在は以下の方法でデータを保存できます：\n- ブラウザの印刷機能でPDF保存\n- チェックリストはブラウザに自動保存されます');
}

// お知らせ機能
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2c5aa0;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        max-width: 300px;
    `;
    
    if (type === 'error') {
        notification.style.background = '#dc3545';
    } else if (type === 'success') {
        notification.style.background = '#28a745';
    } else if (type === 'warning') {
        notification.style.background = '#ffc107';
        notification.style.color = '#000';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// 出発までの日数カウント
function updateCountdown() {
    const departureDate = new Date('2025-12-26T08:00:00');
    const now = new Date();
    const timeDiff = departureDate - now;
    
    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        const countdownElement = document.querySelector('.countdown');
        if (countdownElement) {
            countdownElement.textContent = `出発まで: ${days}日${hours}時間`;
        }
    }
}

// ページ固有の初期化
document.addEventListener('DOMContentLoaded', function() {
    // 現在のページに応じた固有機能の初期化
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'index.html':
        case '':
            updateCountdown();
            setInterval(updateCountdown, 3600000); // 1時間ごとに更新
            break;
            
        case 'participants.html':
            setupExternalLinkWarning();
            break;
            
        case 'info.html':
            updateChecklistProgress();
            setInterval(updateChecklistProgress, 1000); // 1秒ごとに進捗更新
            break;
            
        case 'schedule.html':
            setupExternalLinkWarning();
            break;
    }
});

// エラーハンドリング
window.addEventListener('error', function(e) {
    console.error('エラーが発生しました:', e.error);
    showNotification('システムエラーが発生しました。ページを再読み込みしてください。', 'error');
});

// オフライン対応
window.addEventListener('online', function() {
    showNotification('インターネット接続が復旧しました。', 'success');
});

window.addEventListener('offline', function() {
    showNotification('インターネット接続が切断されました。一部機能が利用できません。', 'warning');
});