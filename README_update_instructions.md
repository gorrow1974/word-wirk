# CLES GitHub Pages 更新パッチ 2026-05-17

## どこに置くか

このZIPの中身を、GitHubリポジトリ直下へアップロード/上書きしてください。

特に重要:

- `data/cles_data_2026-05-17_reflected.json`
- `index.html`
- `day_20260511_index.html`
- `week_20260511_index.html`
- `month_202605_index.html`
- `all_index.html`
- `step2.html`
- `js/app.js`
- `js/data-loader.js`
- `js/step2.js`
- `.github/workflows/generate-review.yml`

## 次はいつ生成されるか

現状のGitHub Pagesは静的サイトなので、何もしなければ自動生成されません。

このパッチでは GitHub Actions を追加しています。

- `data/` 配下を更新して push したとき
- 手動で workflow_dispatch を実行したとき
- 毎週日曜 23:00 JST

に生成処理が走る準備を入れています。

## 足りなかった二つのファイル

以下を追加しました。

- `month_202605_index.html`
- `all_index.html`

加えて日次ページも追加しています。

- `day_20260511_index.html`

## Homeボタン修正

`js/app.js` で Home ボタンを `./index.html` に戻すように修正しました。

## Step2準備

`step2.html` と `js/step2.js` を追加しました。

対応済み:
- 1段目メニュー: Step名
- 2段目メニュー: Step2内コンテンツ
- ヘッダバナー
- イメージできた / なんとなく / 出ない
- 出ない時だけ理由ボタンを表示
