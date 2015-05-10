# trustedNewDoc  
AdobeAcrobatPro用のアドオンメニューツールJavaScripts  
//newDoc.js 20141227  
//http://force4u.cocolog-nifty.com/  
/*  
Public Domain  
href="http://creativecommons.org/publicdomain/zero/1.0/  
*/  
  
/*  
ファイルメニュー）に新規ブランクドキュメント作成メニューを追加します  
用紙サイズは日本向け  
20150104  
USサイズとノビ版を追加  
20150419  
720pサイズを追加  
*/  
  
/*  
Adobe Acrobat 11　用  
（下位バージョンでは動作確認していないだけですが）  
インストール先は以下の任意のどれか  
アプリケーションドメイン  
/Applications/Adobe Acrobat XI Pro/Adobe Acrobat Pro.app/Contents/Resources/JavaScripts  
ローカルドメイン  
/Library/Application Support/Adobe/Acrobat/11.0/JavaScripts  
ユーザードメイン  
/Users/ユーザー名/Library/Application Support/Adobe/Acrobat/11.0/JavaScripts  
*/  
/*  
ダウンロードしたファイルは文字コードをUTF16に変更する必要があります  
*/  
/*  
用紙サイズはpt（ポイント）  
用紙サイズの計算方法は  
=ROUND((ミリサイズ/25.4)*(72),0)  
*/  
