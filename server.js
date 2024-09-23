const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// JSONデータをパースするためのミドルウェア
app.use(bodyParser.json());

// 静的ファイルの提供
app.use(express.static('public'));

// ルートエンドポイント (GET /)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// アカウント作成用の POST エンドポイント
app.post('/create-account', (req, res) => {
    const newAccount = req.body;
    const accountsFilePath = path.join(__dirname, 'public', 'account.json');

    fs.readFile(accountsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`アカウントデータの読み込み時にエラーが発生しました。${err}`)
            return res.status(500).json({ message: 'アカウントデータの読み込みに失敗しました。' });
        }

        let accounts = [];
        if (data) {
            accounts = JSON.parse(data);
        }
        accounts.push(newAccount);

        fs.writeFile(accountsFilePath, JSON.stringify(accounts, null, 2), (err) => {
            if (err) {
                console.error(`アカウント作成時にエラーが発生しました。${err}`)
                return res.status(500).json({ message: 'アカウントデータの保存に失敗しました。' });
            }
            res.status(200).json({ message: 'アカウント作成に成功しました。' });
        });
    });
});

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});