# AI Web Engineering Course Starter

このリポジトリは、受講生が環境構築なしで学習を始めるためのスターターキットです。  
GitHub Codespacesを起動するだけで、日本語化された開発環境と必要な依存関係が自動で準備されます。

## 使い方（受講生向け）

受講開始前に、このリポジトリを自分のアカウントへ `Fork` してください。  
Codespacesは必ず **Fork先のリポジトリ** で作成します。

1. Fork先リポジトリのGitHubページを開く
2. `<> Code` ボタンを押す
3. `Codespaces` タブで `Create codespace on main` をクリック
4. 起動完了後、ターミナルで以下を実行

```bash
npm start
```

5. ブラウザで `http://localhost:3000` を開く

## ファイル構成

- `.devcontainer/devcontainer.json`  
  Codespaces起動時に日本語化拡張とCodeiumを自動インストールし、`npm install` を実行します。
- `package.json`  
  使用ライブラリ（Express / SQLite3）と起動コマンドを定義します。
- `server.js`  
  フロント配信とAPI追加の土台となるNode.jsサーバーです。
- `public/index.html`  
  初期フロントエンド（HTML/CSS/JavaScript）です。
- `public/spec-template.md`  
  要件を言語化するための仕様書テンプレートです。

## 備考

- このテンプレートは、短時間セッションでもエラーを最小化する構成を優先しています。
- 第6回以降は `server.js` にAPIやDB処理を追記して発展させます。
