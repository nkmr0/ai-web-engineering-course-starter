const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// JSONデータを受け取る設定
app.use(express.json());

// フロントエンド（publicフォルダ）をそのまま表示する設定
app.use(express.static(path.join(__dirname, 'public')));

// ==========================================
// 第6回以降：AIがここにAPIやDBの処理を追記します
// ==========================================

// サーバーの起動
app.listen(PORT, () => {
  console.log(`サーバーが起動しました: http://localhost:${PORT}`);
});
