# 国際ロータリー第２５９０地区　インターアクト研修旅行サイト

## 1. プロジェクト概要

### 目的・コンセプト
- 国際ロータリー第２５９０地区のインターアクト研修旅行（2025年12月26日～28日、2泊3日・鹿児島）に関する情報を一元管理
- 行程表やメンバー表、必要な情報を整理して提供

### ターゲットユーザー
- 参加学生
- 保護者
- 顧問・教員

### 主要な機能・特徴
- 参加学生の顔写真や情報を管理できる編集フォーム
- 行程表の場所からWebサイトへのリンク機能
- レスポンシブ対応でPC・スマートフォンどちらでも使いやすい

## 2. 技術要件

### 推奨技術スタック
- **フロントエンド**: HTML/CSS/JavaScript（初心者向け）
- **代替案**: React（より高機能が必要な場合）
- **スタイリング**: CSS Grid/Flexbox + モダンCSS
- **データ管理**: LocalStorage または JSON形式

### 必要な機能
- レスポンシブデザイン対応
- 画像アップロード機能（顔写真）
- フォーム入力・編集機能
- 外部リンク機能

## 3. サイト構成

### ページ一覧
1. **トップページ（目次）** - `/`
2. **行程表** - `/schedule`
3. **参加者リスト** - `/participants`
4. **必要情報** - `/info`

### ナビゲーション構造
- ページ上部にメニューバーまたはハンバーガーメニュー
- 各ページへのクイックアクセス
- トップページから各セクションへの直接リンク

### サイトマップ
```
トップページ
├── 行程表
├── 参加者リスト
└── 必要情報
    ├── 持ち物
    ├── 注意事項
    ├── 緊急連絡先
    └── 課題（※すべて同一ページ内）
```

## 4. 各ページの詳細仕様

### トップページ（目次）
**表示内容:**
- 研修旅行のタイトル・概要
- 開催日程: 2025年12月26日〜28日（2泊3日・鹿児島）
- 各ページへのリンクボタン
  - 行程表へのリンク
  - 参加者リストへのリンク
  - 必要情報へのリンク
- 今後の追加情報表示エリア

**レイアウト:**
- ヒーローセクション（タイトル・日程）
- グリッドレイアウトでのメニューボタン
- 清潔で分かりやすいデザイン

### 行程表ページ
**表示内容:**
- 日程: 12月26日（木）〜28日（土）
- 時間割形式での行程表示
- 各行程の詳細情報:
  - 時間
  - 場所（外部Webサイトへのリンク付き）
  - 活動内容

**機能:**
- 管理者による行程の編集・更新機能
- 場所名クリックで該当Webサイトへ遷移
- 日付別タブまたはセクション分け

**レイアウト:**
- テーブル形式またはカード形式
- モバイルでも見やすいレスポンシブテーブル

### 参加者リストページ
**表示内容:**

**学生情報:**
- 顔写真
- 名前
- 学校名
- 学年
- 班分け

**同行者情報:**
- 顔写真
- 所属
- 連絡先

**機能:**
- 全情報の編集・更新が可能な管理フォーム
- 画像アップロード機能
- 参加者の追加・削除機能
- 班分け管理機能

**レイアウト:**
- カード形式での参加者表示
- 学生と同行者のセクション分け
- 編集ボタン・管理パネル

### 必要情報ページ
**表示内容:**
1. **持ち物リスト**
   - カテゴリ別整理
   - チェックリスト形式

2. **注意事項**
   - 重要度別表示
   - 分かりやすい箇条書き

3. **緊急連絡先**
   - 学校関係者
   - 現地関係者
   - 医療機関など

4. **課題**
   - 今後内容を実装予定
   - 拡張可能なセクション

**レイアウト:**
- 1ページ内に4つのセクションを縦に配置
- 各セクション間に適切な区切りとスペース
- アンカーリンクで各セクションへ素早くジャンプ可能

**機能:**
- 各セクションの編集機能
- 情報の追加・削除機能
- 重要な情報のハイライト表示

## 5. デザイン要件

### デザイン方針
- **モダンデザイン**: 清潔で現代的な見た目
- **若者向けUI**: 直感的で使いやすいインターフェース
- **読みやすさ重視**: 情報の階層化と適切な余白

### カラーテーマ
- **プライマリーカラー**: 青系（信頼感・清潔感）
- **セカンダリーカラー**: 白・グレー系
- **アクセントカラー**: オレンジ・グリーン系（ボタンやリンク）

### フォント
- **見出し**: ゴシック体（太字）
- **本文**: 読みやすい標準フォント
- **サイズ**: モバイル対応の適切なサイズ設定

### UI/UX方針
- **レスポンシブファースト**: モバイル優先設計
- **直感的ナビゲーション**: 迷わないメニュー構造
- **高速ローディング**: 軽量で素早い表示
- **アクセシビリティ**: 全ユーザーが使いやすい設計

## 6. 実装優先度

### Phase 1（最優先）
- 基本的なページ構造
- トップページ
- 静的な行程表

### Phase 2（重要）
- 参加者リスト表示
- 必要情報ページ
- 基本的なレスポンシブ対応

### Phase 3（機能拡張）
- 編集フォーム機能
- 画像アップロード
- データの永続化

### Phase 4（改善・拡張）
- UIの洗練
- 追加機能の実装
- パフォーマンス最適化

## 7. 今後の拡張可能性

- 出席管理機能
- 写真共有機能
- お知らせ・連絡事項配信
- 感想・レポート投稿機能
- 保護者向け専用ページ

---

## 8. 開発・デプロイ情報

### 技術スタック
- **フロントエンド**: HTML5/CSS3/JavaScript
- **デザイン**: 手作り感のある温かみのあるデザイン
- **レスポンシブ**: CSS Grid/Flexbox
- **デプロイ**: GitHub Actions + ConoHa VPS

### サイト情報
- **本番URL**: http://163.44.110.176/interact/
- **サーバー**: ConoHa VPS
- **デプロイ先**: /var/www/2590interact.net/interact/

## 9. デプロイ手順

### 🚀 自動デプロイ（推奨）

**GitHub Actions による自動デプロイ**

1. **初回セットアップ**
   ```bash
   # 1. SSH鍵ペアを生成（ローカル）
   ssh-keygen -t rsa -b 4096 -f ~/.ssh/conoha_deploy
   
   # 2. 公開鍵をサーバーに登録
   ssh-copy-id -i ~/.ssh/conoha_deploy.pub totenagashi@163.44.110.176
   ```

2. **GitHub Secrets 設定**
   
   リポジトリの Settings > Secrets and variables > Actions で以下を設定：

   | Secret名 | 値 | 説明 |
   |----------|-----|------|
   | `SSH_PRIVATE_KEY` | SSH秘密鍵の内容 | `cat ~/.ssh/conoha_deploy` の出力 |
   | `HOST` | `163.44.110.176` | サーバーのIPアドレス |
   | `USERNAME` | `totenagashi` | SSHユーザー名 |
   | `DEPLOY_PATH` | `/var/www/2590interact.net/interact` | デプロイ先パス |

3. **自動デプロイ実行**
   ```bash
   # mainブランチにpushすると自動デプロイ
   git add .
   git commit -m "feat: 新機能追加"
   git push origin main
   ```

4. **手動実行**
   - GitHub の Actions タブから「Deploy to ConoHa VPS」を選択
   - 「Run workflow」をクリック

### 🛠 手動デプロイ

**シェルスクリプトによる手動デプロイ**

1. **実行権限付与**
   ```bash
   chmod +x scripts/deploy.sh
   ```

2. **デプロイ実行**
   ```bash
   # フルデプロイ
   ./scripts/deploy.sh
   
   # SSH接続テストのみ
   ./scripts/deploy.sh --test
   
   # ファイル確認のみ
   ./scripts/deploy.sh --check
   ```

### 🔧 トラブルシューティング

**よくある問題と解決方法**

1. **SSH接続エラー**
   ```bash
   # 接続テスト
   ssh totenagashi@163.44.110.176
   
   # 秘密鍵の権限確認
   chmod 600 ~/.ssh/conoha_deploy
   ```

2. **権限エラー**
   ```bash
   # サーバーでファイル権限確認
   ls -la /var/www/2590interact.net/interact/
   
   # 権限修正
   sudo chown -R www-data:www-data /var/www/2590interact.net/interact/
   sudo chmod -R 755 /var/www/2590interact.net/interact/
   ```

3. **デプロイ失敗時の復旧**
   ```bash
   # バックアップから復旧
   sudo cp -r /var/www/2590interact.net/interact_backup_YYYYMMDD_HHMMSS/* /var/www/2590interact.net/interact/
   ```

### 📁 ファイル構成

```
.
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions ワークフロー
├── scripts/
│   ├── deploy.sh              # 手動デプロイスクリプト
│   └── setup.sh               # 初回セットアップスクリプト
├── index.html                 # トップページ
├── schedule.html              # 行程表
├── participants.html          # 参加者リスト
├── info.html                  # 必要情報
├── styles.css                 # スタイルシート
├── script.js                  # JavaScript
├── CLAUDE.md                  # Claude Code 用設定
└── README.md                  # このファイル
```

### 🔐 セキュリティ

#### 基本セキュリティ対策
- **SSH鍵認証**: パスワード認証を無効化し、SSH鍵のみでアクセス
- **秘密鍵管理**: GitHub Secrets で暗号化保存、ローカルでは適切な権限設定（600）
- **接続制限**: known_hosts による接続先検証
- **自動バックアップ**: デプロイ前に既存ファイルを自動バックアップ（直近3つまで保持）

#### ファイル権限管理
```bash
# ディレクトリ権限
sudo chmod 755 /var/www/2590interact.net/interact/

# ファイル権限
sudo chmod 644 /var/www/2590interact.net/interact/*.html
sudo chmod 644 /var/www/2590interact.net/interact/*.css
sudo chmod 644 /var/www/2590interact.net/interact/*.js

# 所有者設定
sudo chown -R www-data:www-data /var/www/2590interact.net/interact/
```

#### SSH セキュリティ設定
```bash
# SSH設定ファイル例 (~/.ssh/config)
Host conoha-deploy
    HostName 163.44.110.176
    User totenagashi
    IdentityFile ~/.ssh/conoha_deploy
    StrictHostKeyChecking yes
    UserKnownHostsFile ~/.ssh/known_hosts
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

#### サーバー側セキュリティ推奨設定
```bash
# SSHポート変更（オプション）
sudo ufw allow 22/tcp
sudo ufw enable

# ログ監視
sudo tail -f /var/log/auth.log

# 不要サービス停止
sudo systemctl disable --now <unnecessary-service>

# ファイアウォール設定
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw deny 22/tcp from any
sudo ufw allow 22/tcp from <trusted-ip>
```

#### GitHub Secrets セキュリティ
- **最小権限の原則**: 必要最小限の権限のみ付与
- **定期的な鍵ローテーション**: SSH鍵を定期的に更新
- **アクセスログ監視**: GitHub Actions の実行ログを定期確認
- **シークレットの分離**: 本番・開発環境で異なるシークレットを使用

#### セキュリティチェックリスト
- [ ] SSH鍵ペアが正しく生成されている
- [ ] 秘密鍵の権限が600に設定されている
- [ ] 公開鍵がサーバーに正しく登録されている
- [ ] GitHub Secrets が正しく設定されている
- [ ] サーバーのファイル権限が適切に設定されている
- [ ] 不要なファイルがデプロイされていない
- [ ] バックアップが正常に作成されている
- [ ] デプロイ後の検証が正常に動作している

#### インシデント対応
```bash
# 緊急時のアクセス無効化
sudo usermod -L totenagashi  # アカウント無効化
sudo rm ~/.ssh/authorized_keys  # SSH鍵を削除

# バックアップからの復旧
sudo cp -r /var/www/2590interact.net/interact_backup_YYYYMMDD_HHMMSS/* /var/www/2590interact.net/interact/

# ログ確認
sudo grep "totenagashi" /var/log/auth.log
sudo grep "ssh" /var/log/syslog
```

### 📈 CI/CD フロー

1. **開発** → ローカルで機能開発
2. **コミット** → GitHub にpush
3. **自動テスト** → ファイル存在確認、SSH接続テスト
4. **バックアップ** → 既存ファイルの自動バックアップ
5. **デプロイ** → rsync でファイル転送
6. **権限設定** → www-data 権限の自動設定
7. **検証** → デプロイ成功の自動確認
8. **通知** → 結果の表示

---

この設計書を元に、Claude Codeでの開発をスムーズに進めることができます。各フェーズに分けて段階的に実装していくことをお勧めします。# research-trip-demo2025
