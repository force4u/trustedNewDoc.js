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

trustedNewDoc = app.trustedFunction( function (nWidth, nHeight)
{ 
app.beginPriv(); 
switch( arguments.length ) { 
case 2: 
app.newDoc( nWidth, nHeight ); 
break; 
case 1: 
app.newDoc( nWidth ); 
break; 
default: 
app.newDoc(); 
} 
app.endPriv();
})

//メニューを生成
menuParent = "File";
app.addSubMenu({ cName: "CreateBlankDocument", cUser:"新規ブランク書類を作成する",cParent: menuParent, nPos: 0 });
//Reader比対応処理
if(app.viewerType == "Reader") {
app.addMenuItem({ cName: "Reader",cUser:"Readerでは利用出来ません", cParent: "CreateBlankDocument", cExec: "",cEnable: "event.rc = (false);"});
}
//AcrobatProの場合の処理
if(app.viewerType == "Exchange-Pro") {

app.addSubMenu({ cName: "CreateBlankDocumentISOA", cUser:"ISO-A",cParent: "CreateBlankDocument", nPos: 0 });

app.addMenuItem({ cName: "A5",cUser:"A5縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(420,595);"});
app.addMenuItem({ cName: "A4",cUser:"A4縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(595,842)"});
app.addMenuItem({ cName: "A3",cUser:"A3縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(842,1191);"});
app.addMenuItem({ cName: "A2",cUser:"A2縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1191,1684);"});
app.addMenuItem({ cName: "A1",cUser:"A1縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1684,2384);"});
app.addMenuItem({ cName: "A0",cUser:"A0縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(2384,3370);"});

app.addMenuItem({ cName: "BarA1",cUser:"-", cParent: "CreateBlankDocumentISOA", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "A5-R",cUser:"A5-R横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(595,420);"});
app.addMenuItem({ cName: "A4-R",cUser:"A4-R横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(842,595)"});
app.addMenuItem({ cName: "A3-R",cUser:"A3-R横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1191,842);"});
app.addMenuItem({ cName: "A2-R",cUser:"A2-R横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1684,1191);"});
app.addMenuItem({ cName: "A1-R",cUser:"A1-R横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(2384,1684);"});
app.addMenuItem({ cName: "A0-R",cUser:"A0-R横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(3370,2384);"});

app.addMenuItem({ cName: "BarA2",cUser:"-", cParent: "CreateBlankDocumentISOA", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "SRA4",cUser:"SRA4縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(638,907);"});
app.addMenuItem({ cName: "A4-DT",cUser:"A4-FX縦226mm×310mm", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(641,879);"});

app.addMenuItem({ cName: "A3-DT",cUser:"A3-FX縦432mm×310mm", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(879,1225);"});
app.addMenuItem({ cName: "A3-Nobi",cUser:"A3ノビ縦457×305mm", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(865,1295);"});
app.addMenuItem({ cName: "SRA3",cUser:"SRA3縦450×320mm", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(907,1276);"});
app.addMenuItem({ cName: "A3-Ov",cUser:"A3オーバーサイズ縦483×330mm", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(935,1369);"});

app.addMenuItem({ cName: "A5-Bleed",cUser:"A5-Bleed縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(437,612);"});
app.addMenuItem({ cName: "A4-Bleed",cUser:"A4-Bleed縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(612,859);"});
app.addMenuItem({ cName: "A3-Bleed",cUser:"A3-Bleed縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(859,1208);"});
app.addMenuItem({ cName: "A2-Bleed",cUser:"A2-Bleed縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1208,1701);"});
app.addMenuItem({ cName: "A1-Bleed",cUser:"A1-Bleed縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1701,2401);"});
app.addMenuItem({ cName: "OversizeA0",cUser:"A0-Oversize縦", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(2551,3529);"});

app.addMenuItem({ cName: "BarA3",cUser:"-", cParent: "CreateBlankDocumentISOA", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "A5-Bleed-R",cUser:"A5-Bleed横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(612,437);"});
app.addMenuItem({ cName: "A4-Bleed-R",cUser:"A4-Bleed横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(859,612);"});
app.addMenuItem({ cName: "A3-Bleed-R",cUser:"A3-Bleed横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1208,859);"});
app.addMenuItem({ cName: "A2-Bleed-R",cUser:"A2-Bleed横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(1701,1208);"});
app.addMenuItem({ cName: "A1-Bleed-R",cUser:"A1-Bleed横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(2401,1701);"});
app.addMenuItem({ cName: "OversizeA0-R",cUser:"A0-Oversize横", cParent: "CreateBlankDocumentISOA", cExec: "trustedNewDoc(3529,2551);"});

app.addSubMenu({ cName: "CreateBlankDocumentJISB", cUser:"JIS-B",cParent: "CreateBlankDocument", nPos: 1 });

app.addMenuItem({ cName: "B6",cUser:"B6JIS縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(363,516);"});
app.addMenuItem({ cName: "B5",cUser:"B5JIS縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(516,729);"});
app.addMenuItem({ cName: "B4",cUser:"B4JIS縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(729,1032);"});
app.addMenuItem({ cName: "B3",cUser:"B3JIS縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1032,1460);"});
app.addMenuItem({ cName: "B2",cUser:"B2JIS縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1460,2064);"});
app.addMenuItem({ cName: "B1",cUser:"B1JIS縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(2064,2920);"});
app.addMenuItem({ cName: "B0",cUser:"B0JIS縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(2920,4128);"});

app.addMenuItem({ cName: "BarB1",cUser:"-", cParent: "CreateBlankDocumentJISB", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "B6-R",cUser:"B6JIS-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(516,363);"});
app.addMenuItem({ cName: "B5-R",cUser:"B5JIS-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(516,729);"});
app.addMenuItem({ cName: "B4-R",cUser:"B4JIS-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(729,1032);"});
app.addMenuItem({ cName: "B3-R",cUser:"B3JIS-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1032,1460);"});
app.addMenuItem({ cName: "B2-R",cUser:"B2JIS-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1460,2064);"});
app.addMenuItem({ cName: "B1-R",cUser:"B1JIS-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(2064,2920);"});
app.addMenuItem({ cName: "B0-R",cUser:"B0JIS-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(2920,4127);"});

app.addMenuItem({ cName: "BarB2",cUser:"-", cParent: "CreateBlankDocumentJISB", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "B5-Bleed",cUser:"B5JIS-Bleed縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(533,746);"});
app.addMenuItem({ cName: "B4-Bleed",cUser:"B4JIS-Bleed縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(746,1049);"});
app.addMenuItem({ cName: "B3-Bleed",cUser:"B3JIS-Bleed縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1049,1477);"});
app.addMenuItem({ cName: "B2-Bleed",cUser:"B2JIS-Bleed縦", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1477,2081);"});

app.addMenuItem({ cName: "BarB3",cUser:"-", cParent: "CreateBlankDocumentJISB", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "B5-Bleed-R",cUser:"B5JIS-Bleed-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(746,533);"});
app.addMenuItem({ cName: "B4-Bleed-R",cUser:"B4JIS-Bleed-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1049,746);"});
app.addMenuItem({ cName: "B3-Bleed-R",cUser:"B3JIS-Bleed-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(1477,1049);"});
app.addMenuItem({ cName: "B2-Bleed-R",cUser:"B2JIS-Bleed-R横", cParent: "CreateBlankDocumentJISB", cExec: "trustedNewDoc(2081,1477);"});

app.addSubMenu({ cName: "CreateBlankDocumentUS", cUser:"US",cParent: "CreateBlankDocument", nPos: 2 });

app.addMenuItem({ cName: "HalfLetter",cUser:"HalfLetter縦5.5×8.5", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(396,612);"});

app.addMenuItem({ cName: "Letter",cUser:"Letter縦8.5×11", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(612,792);"});
app.addMenuItem({ cName: "Legal",cUser:"Legal縦8.5×14", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(612,1008);"});
app.addMenuItem({ cName: "Executive",cUser:"Executive縦7.25×10.5", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(522,756);"});
app.addMenuItem({ cName: "Tabloid",cUser:"Tabloid縦11×17", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(792,1224);"});
app.addMenuItem({ cName: "Screen",cUser:"Screen縦", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(468,373);"});

app.addMenuItem({ cName: "BarUS1",cUser:"-", cParent: "CreateBlankDocumentUS", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "HalfLetter-R",cUser:"HalfLetter-R横", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(612,396);"});

app.addMenuItem({ cName: "Letter-R",cUser:"Letter-R横11×8.5", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(792,612);"});
app.addMenuItem({ cName: "Legal-R",cUser:"Legal-R横14×8.5", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(1008,612);"});
app.addMenuItem({ cName: "Executive-R",cUser:"Executive-R横10.5×7.25", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(756,522);"});
app.addMenuItem({ cName: "Ledger-R",cUser:"Ledger-R横17×11", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(1224,792);"});
app.addMenuItem({ cName: "Screen-R",cUser:"Screen-R横", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(468,373);"});

app.addMenuItem({ cName: "BarUS2",cUser:"-", cParent: "CreateBlankDocumentUS", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "Letter-Bleed",cUser:"Letter-Bleed縦", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(630,810);"});
app.addMenuItem({ cName: "Legal-Bleed",cUser:"Legal-Bleed縦", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(630,1026);"});
app.addMenuItem({ cName: "Tabloid-Bleed",cUser:"Tabloid-Bleed縦", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(810,1242);"});

app.addMenuItem({ cName: "BarUS3",cUser:"-", cParent: "CreateBlankDocumentUS", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "Letter-Bleed-R",cUser:"Letter-Bleed-R横", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(810,630);"});
app.addMenuItem({ cName: "Legal-Bleed-R",cUser:"Legal-Bleed-R横", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(1026,630);"});
app.addMenuItem({ cName: "Tabloid-Bleed-R",cUser:"Tabloid-Bleed-R横", cParent: "CreateBlankDocumentUS", cExec: "trustedNewDoc(1242,810);"});

app.addSubMenu({ cName: "CreateBlankDocumentANSI", cUser:"ANSI",cParent: "CreateBlankDocument", nPos: 3 });

app.addMenuItem({ cName: "ANSI A",cUser:"ANSI A縦8.5×11", cParent: "CreateBlankDocumentANSI", cExec: "trustedNewDoc(612,792);"});
app.addMenuItem({ cName: "ANSI B",cUser:"ANSI B縦11×17", cParent: "CreateBlankDocumentANSI", cExec: "trustedNewDoc(792,1224);"});
app.addMenuItem({ cName: "ANSI C",cUser:"ANSI C縦17×22", cParent: "CreateBlankDocumentANSI", cExec: "trustedNewDoc(1224,1584);"});
app.addMenuItem({ cName: "ANSI D",cUser:"ANSI D縦22×34", cParent: "CreateBlankDocumentANSI", cExec: "trustedNewDoc(1584,2448);"});
app.addMenuItem({ cName: "ANSI E",cUser:"ANSI E縦34×44", cParent: "CreateBlankDocumentANSI", cExec: "trustedNewDoc(2448,3168);"});
app.addMenuItem({ cName: "ANSI F",cUser:"ANSI F縦28×40", cParent: "CreateBlankDocumentANSI", cExec: "trustedNewDoc(2016,2880);"});
app.addMenuItem({ cName: "ANSI SuperB",cUser:"ANSI SuperB縦13×19", cParent: "CreateBlankDocumentANSI", cExec: "trustedNewDoc(936,1368);"});

app.addSubMenu({ cName: "CreateBlankDocumentARCH", cUser:"ARCH",cParent: "CreateBlankDocument", nPos: 4 });

app.addMenuItem({ cName: "ARCH A",cUser:"ARCH A縦9×12", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(648,864);"});
app.addMenuItem({ cName: "ARCH B",cUser:"ARCH B縦12×18", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(864,1296);"});
app.addMenuItem({ cName: "ARCH C",cUser:"ARCH C縦18×24", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(1296,1728);"});
app.addMenuItem({ cName: "ARCH D",cUser:"ARCH D縦24×36", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(1728,2592);"});
app.addMenuItem({ cName: "ARCH E",cUser:"ARCH E縦36×48", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(2592,3456);"});
app.addMenuItem({ cName: "ARCH E1",cUser:"ARCH E1縦30×42", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(2160,3024);"});
app.addMenuItem({ cName: "ARCH E2",cUser:"ARCH E2縦26×38", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(1872,2736);"});
app.addMenuItem({ cName: "ARCH E3",cUser:"ARCH E3縦27×39", cParent: "CreateBlankDocumentARCH", cExec: "trustedNewDoc(1944,2808);"});

app.addSubMenu({ cName: "CreateBlankDocumentCH", cUser:"CH",cParent: "CreateBlankDocument", nPos: 5 });

app.addMenuItem({ cName: "16Kai",cUser:"16Kai縦", cParent: "CreateBlankDocumentCH", cExec: "trustedNewDoc(553,757);"});
app.addMenuItem({ cName: "8Kai",cUser:"8Kai縦", cParent: "CreateBlankDocumentCH", cExec: "trustedNewDoc(757,1106);"});

app.addMenuItem({ cName: "BarCH",cUser:"-", cParent: "CreateBlankDocumentCH", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "16Kai-R",cUser:"16Kai-R横", cParent: "CreateBlankDocumentCH", cExec: "trustedNewDoc(757,553);"});
app.addMenuItem({ cName: "8Kai-R",cUser:"8Kai-R横", cParent: "CreateBlankDocumentCH", cExec: "trustedNewDoc(1106,757);"});

app.addMenuItem({ cName: "Bar",cUser:"-", cParent: "CreateBlankDocument", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "NP1",cUser:"ブランケットNP406×545", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(1151,1545);"});
app.addMenuItem({ cName: "NP2",cUser:"タブロイドNP273×406", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(774,1151);"});
app.addMenuItem({ cName: "NP3",cUser:"菊半NP469×636", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(1406,1803);"});
app.addMenuItem({ cName: "NP4",cUser:"菊四NP318×469", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(902,1406);"});

app.addMenuItem({ cName: "Bar",cUser:"-", cParent: "CreateBlankDocument", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "HD720",cUser:"720p 1280x720", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(1280,720);"});

app.addMenuItem({ cName: "Bar2",cUser:"-", cParent: "CreateBlankDocument", cExec: "",cEnable: "event.rc = (false);"});

app.addMenuItem({ cName: "HAGAKI",cUser:"はがき縦", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(283,420);"});
app.addMenuItem({ cName: "YO0",cUser:"めいし縦", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(156,258);"});

app.addMenuItem({ cName: "HAGAKI-R",cUser:"はがき横", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(420,283);"});
app.addMenuItem({ cName: "YO0-R",cUser:"めいし横", cParent: "CreateBlankDocument", cExec: "trustedNewDoc(258,156);"});

}
