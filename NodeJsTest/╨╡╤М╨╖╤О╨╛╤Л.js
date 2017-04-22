uid = 'iSd6LVkT7JPB3y4PIb';
room = '4-';
dir = 1;
reop = 0;
scrl = 0;
if (navigator.appName.indexOf('Opera') >= 0) scrl = 1;
nav = navigator.appVersion;
i = nav.indexOf('MSIE');
if (i < 0) nav = '0.0'; else {
    nav = nav.substr(i + 5, 3);
    if (nav < 7.0) reop = 1;
    if (nav < 5.5) scrl = 1;
}
mopnd = 0;
px = 0;
rr = 0;
ro = 1;
stl1 = '<head><style type="text/css">A{text-decoration:none;color:000000;}A:hover{text-decoration:underline;color:FF0000;}</style></head>';
stl2 = '<head><style type="text/css">td{font-family:arial,helvetica;font-size:12px;}input{height:18px;font-size:9px;}A{text-decoration:none;}A:hover{text-decoration:underline;}</style></head>';
sp = new Array(' ', ",", ':', '<', '>', '"', '?', '');
cm = new Array();
ncm = 0;
i = 1;
cu = new Array();
ncu = 0;
il = '';
lc = '303';
sp10 = '<img width=10 height=10 src=/ch/pics/sp.gif>';
pm = new Array();
npm = 0;
j = 1;
pu = new Array();
npu = 0;
lp = '303';
nx = new Array();
mu = new Array();
mu[0] = new Array();
mu[1] = new Array();
mu[2] = new Array();
tl = new Array();
tll = new Array();
hist = new Array('');
nh = 0;
ch = 0;
ct = 0;
ca = 0;
snd = 0;
chf = 1;
chi = 1;
cho = 1;
chnf = 0;
login = 'SnapChatDevil';
function check(c) {
    if (c)return ' checked'; else return '';
}
function pscrl() {
    main.document.getElementById('pause').style.top = main.document.body.scrollTop;
}
function dispp(x) {
    var s = 'none';
    if (!x) s = 'block';
    main.document.getElementById('pause').style.display = s;
}
function chpb(x) {
    if (x) x = 'stop'; else x = 'play';
    inp.document.getElementById('ps').src = '/ch/pics/' + x + '.gif';
}
function plps() {
    dispp(ply = 1 - ply);
    if (ply)if (0) showc(1, 1, ncm); else if (!mopnd && reop) showc(1, 0, ncm); else if (!scrl) aid = scrl0(main.document, aid);
    chpb(ply);
    inp.document.say.EX.focus();
}
function psnd() {
    if (snd) {
        fs.document.open();
        fs.document.write('<body><embed src="/ch/snd/newp.wav" hidden="true" autostart="true" width="0" height="0"></embed></body>');
        fs.document.close();
    }
}
function loadrooms(list) {
    var n = 0, k = 0, rooms = new Array(), p = 0, t;
    while (k >= 0) {
        k = list.indexOf('|');
        if (k >= 0) {
            rooms[n] = new Object();
            rooms[n].id = list.substr(0, 2);
            rooms[n].nam = list.substring(3, k);
            t = rooms[n].id.charAt(1);
            rooms[n].ex = 0;
            if (t == '+') p = n;
            list = list.slice(k + 1);
            n++;
        }
    }
    return rooms;
}
function loadlist(list) {
    var obj = new Object(), k = 0;
    while (k >= 0) {
        k = list.indexOf('|');
        if (k >= 0) {
            obj[list.substr(0, k)] = 1;
            list = list.slice(k + 1);
        }
    }
    return obj;
}
rooms = new loadrooms('1-:Главная|I+:<B>Интересы</B> &gt;&gt;|I1:Знакомства|I2:Секс|I3:Гей/Лес/Би|I4:Работа|I5:Куплю/Продам|8-:<B>Киев</B>|3-:Одесса|6-:Днепр|U+:<B>Города</B> &gt;&gt;|Ub:Винница|Ud:Донецк|Ue:Житомир|Uf:Запорожье|Ug:Ив-Франковск|Uh:Кировоград|U9:Кременчуг|Ui:Кривой Рог|Uq:Крым|Uj:Луганск|Uk:Луцк|Ul:Львов|Um:Николаев|Uo:Полтава|Up:Ровно|Ur:Сумы|Us:Тернополь|Ut:Ужгород|Uu:Харьков|Uv:Херсон|Uw:Хмельницкий|Ux:Черкассы|Uy:Чернигов|Uz:Черновцы|4-:Беспредел|');
rids = new Object();
for (i = 0; i < rooms.length; i++)rids[rooms[i].id] = rooms[i].nam;
ignors = new loadlist('');
friends = new loadlist('');
wopd = new Object();
aid = 0;
fails = 0;
ref = 0;
glu = 0;
gst = 'a';
function scrl0(d, aid) {
    var cid = 'a' + aid;
    d.write('<b id="' + cid + '"></b>');
    d.getElementById(cid).scrollIntoView(true);
    return ++aid;
}
function str2arr(s) {
    var x = new Object(), k = 0;
    while (k >= 0) {
        k = s.indexOf('|');
        if (k >= 0) {
            x[s.charAt(0)] = s.substring(2, k);
            s = s.slice(k + 1);
        }
    }
    return x;
}
colz = new str2arr('0:000000|1:800000|2:008000|3:808000|4:000080|5:800080|6:60A000|7:9000C0|8:6000C0|9:00AAAA|A:AAAA00|B:0095E2|C:008080|D:808080|E:B07070|F:FFA500|G:0000FF|H:FF00FF|I:BB0000|J:007799|K:BB0099|L:CC6600|M:006600|N:555555|Z:FF0000|');
smlz = new str2arr('');
function start(x) {
    chpb(ply = 1);
    if (1) {
        if (ro > 0) {
            ncm = 0;
            wx = 1;
            glu = 0;
        } else wx = 0;
        if (!x) main.document.close();
        showc(1, 0, ncm);
        if (x) showp(1, 0, 0, 0);
    } else glu = 0;
    if (ct && (!1)) clearTimeout(TID1);
    ct = 1;
    if (1) {
        wcheck(wx);
    } else {
        refrsh();
    }
}
function wcheck(w) {
    if (w) {
        lc = lp;
        ncm = 0;
    }
    if (rr) clearTimeout(T1);
    rr = 1;
    fr.location = '/cgi-bin/ch/stream.cgi?room=' + room + '&uid=' + uid + '&sx=f&col=H&lp=' + lp + '&lc=' + lc + '&lu=' + glu + '&st=' + gst;
    T1 = setTimeout('wcheck(1)', 35000);
}
function rx() {
    clearTimeout(T1);
    T1 = setTimeout('wcheck(0)', 35000);
}
function showc(a, b, n) {
    d = main.document;
    var i;
    if (a) {
        mopnd = 1;
        d.open();
        d.writeln(stl1 + '<scr' + 'ipt>window.onscroll=parent.pscrl;</scr' + 'ipt><body bgcolor=#FFFFFF><div id="pause" style="position:absolute;top:0px;right:0px;margin:25px;display:none;" align=right><img src=/ch/pics/pause.gif></div><font face="arial,helvetica" size=2>');
        if (!ply) dispp(0);
    }
    if (!dir)for (i = 0; i < n; i++)d.writeln(cm[i]); else {
        for (i = n - 1; i >= 0; i--) {
            d.writeln(cm[i]);
            if (scrl && ply) main.scroll(0, 500000);
        }
        if (!scrl && ply) aid = scrl0(d, aid);
    }
    if (b) {
        d.writeln('</font></body>');
        d.close();
    }
}
function showp(a, b, c, n) {
    d = priv.document;
    var j;
    if (a) {
        if (!b && n) d.close();
        px = 1;
        d.open();
        d.writeln(stl1 + '<body bgcolor=#E0E0E0><font face="arial,helvetica" size=2>');
    }
    if (b) {
        psnd();
        if (!dir)for (j = 0; j < n; j++)d.writeln(pm[j]); else {
            for (j = n - 1; j >= 0; j--) {
                d.writeln(pm[j]);
                if (scrl) priv.scroll(0, 500000);
            }
            if (!scrl) {
                aid = scrl0(d, aid);
            }
        }
    }
    if (c) {
        d.writeln('</font></body>');
        d.close();
    }
}
function col(x) {
    var c = colz[x];
    if (!c || 0) c = '000000';
    if (0 && x == 'Z') c = '777777';
    return c;
}
function to(x) {
    var t = '';
    if ((x == 1) || (x == 3)) t = '<B>';
    if (x > 1) t = t + '<I>';
    if (0) t = '';
    return t;
}
function tc(x) {
    var t = '';
    if ((x == 1) || (x == 3)) t = '</B>';
    if (x > 1) t = '</I>' + t;
    if (0) t = '';
    return t;
}
function nfl(nm) {
    return '<a title="инфо (нажмите)" target=_blank href="/cgi-bin/photo/info.pl?n=' + escape(nm) + '&l=' + escape(login) + '&sx=f"><img border=0 src=/ch/pics/nfo.gif></a>';
}
function nf(sp) {
    var ret = '';
    if (nm.charAt(0) == '>') {
        nm = nm.slice(1);
        ret = nfl(nm);
    } else if (sp) {
        ret = sp10;
    }
    return ret;
}
function pre(x) {
    var re = '', ik = x.indexOf('*');
    while (ik >= 0) {
        nm = x.substring(1, ik);
        if (re != '') re += ', ';
        re += '<nobr>' + nf(0) + '<A href=javascript:parent.n2t("' + nm + '")><font color=#' + col(x.charAt(0)) + '><U>' + nm + '</U></font></A></nobr>';
        x = x.slice(ik + 1);
        ik = x.indexOf('*');
    }
    return re;
}
function cs(x, y) {
    tz = 0;
    for (ti = 0; ti < 8; ti++) {
        if (x == sp[ti]) tz++;
        if (y == sp[ti]) tz++;
    }
    return tz;
}
function mark(str, sub, col, t1, t2) {
    var tms = str, l = sub.length;
    str = '';
    var n = tms.indexOf(sub);
    while (n >= 0) {
        str += tms.substr(0, n);
        if ((tms.substr(n + l, 3) != '")>') && (tms.substr(n - 5, 5) != 'n2t("') && (cs(tms.charAt(n - 1), tms.charAt(n + l)) == 2)) str += t1 + '<font color=#' + col + '>' + tms.substr(n, l) + '</font>' + t2; else str += tms.substr(n, l);
        tms = tms.slice(n + l);
        n = tms.indexOf(sub);
    }
    str += tms;
    return str;
}
function tim(tm) {
    return '<A href="javascript:parent.ntt(\'' + tm + '\')">' + tm + '</A>';
}
function smile(s) {
    var n = s.indexOf('<>'), p, a = '', b = '';
    if (0) {
        a = '<font color=#777777>';
        b = '</font>';
    }
    while (n >= 0) {
        p = s.charAt(n + 2);
        if (0) p = ' ' + a + smlz[p] + b + ' '; else p = '<img src=/ch/pics/' + p + '.gif>';
        s = s.substr(0, n) + p + s.slice(n + 3);
        n = s.indexOf('<>');
    }
    return s;
}
function mv(cmes, pmes) {
    var npu = 0, n = 1, n1, tmp, li, tmg, typ, i, ii, jp;
    while (n > 0) {
        n = pmes.indexOf('<<');
        if (n > 0) {
            pu[npu++] = pmes.substr(0, n);
            pmes = pmes.slice(n + 2);
        }
    }
    if (npu < 20) npm += npu; else npm = npu;
    if (npm > 100) npm = 100;
    if (pmes == 'x') {
        npm = 0;
        px = 0;
    } else px = 1;
    if (npm > 0) {
        for (j = npm - 1; j >= npu; j--)pm[j] = pm[j - npu];
    }
    for (j = 0; j < npu; j++) {
        tm = tim(pu[j].substr(0, 14));
        mg = pu[j].slice(19);
        if (mg.substr(0, 4) == '<nc>') {
            mg = mg.slice(4);
            tmg = '<b><font color=red>!</font> новые комментарии:</b> ';
            while (mg.length > 0) {
                n1 = mg.indexOf('|');
                tmp = mg.substr(0, n1);
                mg = mg.slice(n1 + 1);
                typ = tmp.charAt(0);
                tmp = tmp.slice(1);
                tmg += '<a target=_blank href="/cgi-bin/photo/';
                i = 'инфо:';
                jp = '';
                ii = '';
                li = tmp;
                if (typ == 'i') tmg += 'info.pl?n='; else {
                    tmg += 'show.pl?s=' + tmp.charAt(0) + '&p=ok&n=';
                    tmp = tmp.slice(1);
                    i = 'фото:';
                    jp = '.jpg';
                    ii = '/' + tmp.substr(tmp.length - 2, 2);
                    li = tmp.substr(0, tmp.length - 2);
                }
                tmg += escape(tmp) + jp + '&l=' + escape(login) + '&sx=f&pg=l">' + i + li + ii + '</a>, ';
            }
            mg += tmg.substr(0, tmg.length - 2);
        }
        n = mg.indexOf('/>');
        n1 = mg.indexOf('*>');
        if (n >= 0) {
            nm = mg.substring(n + 2, n1);
            if (mg.substr(0, 2) == '/>') t = 1; else t = 0;
            mg = mg.substr(0, n) + nf(t) + '<A HREF=javascript:parent.n3t("' + nm + '")><U>' + nm + '</U></A> ' + to(pu[j].charAt(18)) + mg.slice(n1 + 2);
            if (!t) mg = sp10 + mg;
        }
        mg = smile(mg);
        pm[j] = tm + ' <font color=#' + col(pu[j].charAt(17)) + '>' + mg + tc(pu[j].charAt(18)) + '</font><br>';
    }
    if (npm > 0) lp = escape(pu[0].substr(0, 17));
    ncu = 0;
    n = 1;
    while (n > 0) {
        n = cmes.indexOf('<<');
        if (n > 0) {
            cu[ncu++] = cmes.substr(0, n);
            cmes = cmes.slice(n + 2);
        }
    }
    if (ncu < 30) ncm += ncu; else ncm = ncu;
    if (ncm > 80) ncm = 80;
    if (ncm > 0)for (i = ncm - 1; i >= ncu; i--)cm[i] = cm[i - ncu];
    for (i = 0; i < ncu; i++) {
        if (room.charAt(1) == '+') {
            t = cu[i].charAt(0);
            if (t != '+') rm = rids[room.charAt(0) + t]; else rm = '<B>Все</B>';
            cu[i] = cu[i].slice(1);
            if (rm.length > 8 && t != '+') rm = rm.substr(0, 7) + '..';
            rm = ' [<A style="width:60px;" href="javascript:parent.chroom(\'' + room.charAt(0) + t + '\',\'0\')">' + rm + '</A>]';
        } else rm = '';
        tm = tim(cu[i].substr(0, 8));
        mg = cu[i].slice(13);
        n = mg.indexOf('/>');
        n1 = mg.indexOf('*>');
        if (n >= 0) {
            nm = mg.substring(n + 2, n1);
            mg = mg.substr(0, n) + nf(1) + '<A HREF=javascript:parent.n2t("' + nm + '")><U>' + nm + '</U></A> ' + to(cu[i].charAt(12)) + mg.slice(n1 + 2);
        } else mg = sp10 + mg;
        n0 = mg.indexOf('=>');
        n2 = mg.indexOf('%>');
        if (n0 >= 0) {
            ef = '';
            em = '';
            eo = '';
            tmg = mg.substring(n0 + 2, n2);
            nt = tmg.indexOf('|');
            ef = tmg.substr(0, nt);
            tmg = tmg.slice(nt + 1);
            nt = tmg.indexOf('|');
            em = tmg.substr(0, nt);
            tmg = tmg.slice(nt + 1);
            eo = tmg;
            ef = pre(ef);
            if (ef != '') {
                ef = ' вошла ' + ef;
                if ((em != '') || (eo != '')) ef += ';';
            }
            em = pre(em);
            if (em != '') {
                em = ' вошел ' + em;
                if (eo != '') em += ';';
            }
            eo = pre(eo);
            if (eo != '') eo = ' влезло ' + eo;
            mg = mg.substr(0, n0) + '<B>В чат' + ef + em + eo + mg.slice(n2 + 2);
        }
        mg = mark(smile(mg), login, 'FF0000', '', '');
        cm[i] = tm + rm + ' <font color=#' + col(cu[i].charAt(11)) + '>' + mg + tc(cu[i].charAt(12)) + '</font><br>';
    }
    if (ncm > 0) lc = escape(cu[0].substr(0, 11));
    if (0) {
        if (ply) showc(1, 1, ncm);
        if ((npu > 0) || (!px)) showp(1, 1, 1, npm);
        ref = 0;
    } else {
        if (ncu > 0) {
            if (!mopnd && reop) {
                if (ply) showc(1, 0, ncm);
            } else showc(0, 0, ncu);
        }
        if (npu > 0)if (reop) showp(1, 1, 1, npm); else showp(0, 1, 0, npu);
        if (!px) showp(1, 0, 0, 1);
    }
    if (1) rx();
}
function prs(tl, tll, sx) {
    var n = 1, i, xx;
    while (n >= 0) {
        n = tl.indexOf('|');
        if (n >= 0) {
            xx = tl.substr(0, n);
            tl = tl.slice(n + 1);
            i = 0;
            while ((i < nx[sx]) && (mu[sx][i] < xx))i++;
            if ((i < nx[sx]) && (mu[sx][i] != xx)) {
                nx[sx]++;
                for (j = nx[sx] - 1; j > i; j--)mu[sx][j] = mu[sx][j - 1];
                mu[sx][i] = xx;
            } else if (i == nx[sx]) mu[sx][nx[sx]++] = xx;
        }
    }
    n = 1;
    while (n >= 0) {
        n = tll.indexOf('|');
        if (n >= 0) {
            xx = tll.substr(0, n);
            tll = tll.slice(n + 1);
            i = 0;
            while ((i < nx[sx]) && (mu[sx][i] != xx))i++;
            if (i < nx[sx]) {
                nx[sx]--;
                for (j = i; j < nx[sx]; j++)mu[sx][j] = mu[sx][j + 1];
            }
        }
    }
}
function uout(sx) {
    var to, tc, t = new Object(), a, out = new Object(), z = new Object(), r = 0, nick, ncs, stt, nfo;
    if (room.charAt(1) != '-') r = 1;
    out.n = 0;
    out.s = '';
    for (k = 0; k < nx[sx]; k++) {
        to = '';
        tc = '';
        t.f = 0;
        t.i = 0;
        t.o = 0;
        nick = mu[sx][k].substring(r, mu[sx][k].length - 3);
        ncol = mu[sx][k].charAt(mu[sx][k].length - 3);
        stt = mu[sx][k].charAt(mu[sx][k].length - 2);
        nfo = mu[sx][k].charAt(mu[sx][k].length - 1);
        ncs = nick + ncol + stt;
        if (!z[ncs]) {
            z[ncs] = 1;
            if (stt == 'a') stt = '<img src=/ch/pics/avl.gif>';
            if (stt == 'b') stt = '<img src=/ch/pics/pri.gif>';
            if (stt == 'd') stt = '<img src=/ch/pics/dnd.gif>';
            if (stt == 'n') stt = '<img src=/ch/pics/n-a.gif>';
            if (nfo != '0') nfo = nfl(nick); else nfo = '';
            t.o = 1;
            if (ignors[nick] > 0) {
                stt = '<img src=/ch/pics/ign.gif>';
                t.i = 1;
                t.o = 0;
            }
            if (friends[nick] > 0) {
                to = '<b>';
                tc = '</b>';
                t.f = 1;
                t.o = 0;
            }
            a = 0;
            if ((t.o && cho) || (t.f & chf) || (t.i & chi)) a = 1;
            if (a) {
                out.s += stt + ' ' + nfo + '<A HREF=javascript:parent.n3t("' + nick + '")><font color=#' + col(ncol) + '>' + to + nick + tc + '</font></A><br>';
                out.n++;
            }
        }
    }
    return out;
}
function drawus() {
    var u = new Object(), n = 0;
    d = us.document;
    d.open();
    d.writeln(stl2 + '<body bgcolor=#DDDDDD><form action="javascript:parent.drawus()"><nobr><font face="arial,helvetica" size=-1><font color=red>');
    u = uout(0);
    n += u.n;
    d.writeln('<center><B><U>Девушки</U></B> (<B>' + u.n + '</B>)</center>');
    d.writeln(u.s);
    u = uout(1);
    n += u.n;
    d.writeln('<br><center><B><U>Парни</U></B> (<B>' + u.n + '</B>)</center>');
    d.writeln(u.s);
    u = uout(2);
    n += u.n;
    d.writeln('<br><center><B><U>Другие</U></B> (<B>' + u.n + '</B>)</center>');
    d.writeln(u.s);
    d.writeln('<center><hr color=#AAAAAA>В комнате: <B>' + n + '</B><hr color=#AAAAAA></center></font>');
    d.writeln('<center><B>показывать:</B></center><table width=100% border=0 cellpadding=0><tr><td>');
    d.write('<input type=checkbox onclick="parent.chf=this.checked"' + check(chf) + '> <font color=green>друзей</font><br>');
    d.write('<input type=checkbox onclick="parent.chi=this.checked"' + check(chi) + '> <font color=red>игнор</font><br>');
    d.write('<input type=checkbox onclick="parent.cho=this.checked"' + check(cho) + '> <font color=blue>остальных</font>');
    d.writeln('</td><td align=right valign=center><input type=submit value=OK></td></font></nobr></form></body>');
    d.close();
}
function drawr() {
    var k = 1, cc, img, p = 0, t, a, a1, a2;
    d = roomz.document;
    d.open();
    d.writeln('<head><style type="text/css">td{font-family:verdana,helvetica;font-size:10px;}</style></head>');
    d.writeln('<body link=black alink=black vlink=black bgcolor=silver><center>');
    d.writeln('<font face="arial,helvetica" size=-1 color=#008800><B>В чате: <font color=#BB0000>' + ovl + '</font></B></font><table border=0 cellspacing=0 cellpadding=0 width=90%>');
    for (k = 0; k < rooms.length; k++) {
        t = rooms[k].id.charAt(1);
        a = '<A href=javascript:parent.chroom("' + rooms[k].id + '","0")>';
        a2 = a;
        if (rooms[k].id == room) cc = 'CC0000'; else cc = '000000';
        if (t == '-') {
            p = 0;
            img = '<img src=/ch/pics/o.gif> ';
        } else if (t == '+') {
            if (rooms[k].ex) {
                img = '-';
                p = 1;
            } else {
                img = '+';
                p = 0;
            }
            a1 = '<A href="javascript:parent.rer(' + k + ')">';
            img = a1 + '<img border=0 src=/ch/pics/' + img + '.gif></A>';
            if (!ca) a2 = a1;
        } else img = '&nbsp; <img src=/ch/pics/o.gif>';
        if (t == '-' || t == '+' || p || rooms[k].id == room) d.writeln('<tr><td>' + img + ' ' + a2 + '<font color=#' + cc + '>' + rooms[k].nam + '</font></A></td><td align=right><font color=#008800><B>&nbsp;' + rc[k] + '</B></font></td></tr>');
    }
    d.writeln('</table></center></body>');
    d.close();
}
function rer(k) {
    rooms[k].ex = !rooms[k].ex;
    drawr();
}
rc = new Array();
function updus(lu, fl, fll, ml, mll, ol, oll, rzc) {
    var rn = 0, k = 1, t = '', p = -1;
    if (glu == 0) {
        nx[0] = 0;
        nx[1] = 0;
        nx[2] = 0;
    }
    prs(fl, fll, 0);
    prs(ml, mll, 1);
    prs(ol, oll, 2);
    drawus(0);
    ovl = 0;
    while (k >= 0) {
        k = rzc.indexOf('|');
        if (k >= 0) {
            rc[rn] = parseInt(rzc.substr(0, k));
            rzc = rzc.slice(k + 1);
            t = rooms[rn].id.charAt(1);
            if (t == '+') p = rn; else if (t == '-') p = -1;
            if (t == '-' || t == '+') ovl += rc[rn]; else {
                rc[p] += rc[rn];
                ovl += rc[rn];
            }
            rn++;
        }
    }
    drawr();
    glu = lu;
}
function wopen(url, wnam, w, h) {
    window.open(url, wnam, 'width=' + w + ',height=' + h + ',menubar=0,location=0,toolbar=0,directories=0,status=0,scrollbars=1,resizable=1');
}
function wo(lt) {
    if (lt == 'i') wopen('/ch/ilist.html', 'ilist', 200, 500);
    if (lt == 'f') wopen('/ch/flist.html', 'flist', 200, 500);
}
function rp(lt) {
    if (wopd[lt]) wo(lt);
}
function list(wnam, lobj, ltype) {
    var i, n = 0, larr = new Array(), d = wnam.document;
    for (i in lobj)if (lobj[i] > 0) {
        larr[n++] = i;
    }
    larr = sort(larr);
    for (i = 0; i < n; i++)d.write('<input type=checkbox name="nick-' + larr[i] + '"> <a href="javascript:opener.n3t(\'' + larr[i] + '\')">' + larr[i] + '</a><br>');
    d.write('<br>ников: ' + n + '<hr><input type=submit name=OK value="Удалить" style="width:100%;">');
    d.write('<input type=hidden name=uid value=' + uid + '><input type=hidden name=ltype value=' + ltype + '>');
}
function sort(arr) {
    var n = arr.length, i, j, t;
    for (i = 0; i < n - 1; i++)for (j = i + 1; j < n; j++)if (arr[i] > arr[j]) {
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
    return arr;
}
ban = 9;
function showban() {
    if (ban > 0) {
        if (ban == 1) {
            topp.location = '/ban/468x60_c1.html';
            ban = 0;
            setTimeout("ban=5", 150000);
        }
        if (ban == 2) {
            topp.location = '/ban/468x60_kvitka.html';
            ban = 0;
            setTimeout("ban=3", 120000);
        }
        if (ban == 3) {
            topp.location = '/ban/468x60_c3.html';
            ban = 0;
            setTimeout("ban=6", 150000);
        }
        if (ban == 5) {
            topp.location = '/ban/468x60_kvitka.html';
            ban = 0;
            setTimeout("ban=6", 120000);
        }
        if (ban == 6) {
            topp.location = '/ban/468x60_holder.html';
            ban = 0;
            setTimeout("ban=9", 120000);
        }
        if (ban == 9) {
            netban();
            ban = 0;
            setTimeout("ban=9", 120000);
        }
    }
}
function netban() {
    bt = Math.random() * 100;
    if (bt > 20) topp.location = '/ban/468x60_bigbn.html'; else topp.location = '/ban/468x60_ubs.html';
}
function refrsh() {
    TID1 = setTimeout('refrsh()', 15000);
    if (!ref) fr.location = '/cgi-bin/ch/mshow.pl?uid=' + uid + '&room=' + plus(room) + '&lp=' + lp + '&lc=' + lc;
    ref++;
    if (ref > 2) ref = 0;
}
function plus(s) {
    var k = 0;
    while (k >= 0) {
        k = s.indexOf('+');
        if (k >= 0) s = s.substr(0, k) + '%2B' + s.slice(k + 1);
    }
    return s;
}
function chroom(rid, drw) {
    room = rid;
    if (drw != '0') inp.location = '/cgi-bin/ch/inp.pl?strm=y&' + 'uid=' + uid + '&color=H&sx=f&room=' + plus(room); else {
        fs.location = '/cgi-bin/ch/inp.pl?strm=y&' + 'uid=' + uid + '&color=H&sx=f&drw=0&room=' + plus(room);
        inp.document.say.room.value = room;
        inp.document.ustat.room.value = room;
    }
    showban();
}
function sf(x, n) {
    if (!n)return Math.sqrt(x); else return String.fromCharCode(x);
}
function n2t(s) {
    if (reop) mopnd = 0;
    n3t(s);
}
function n3t(s) {
    if (s != '') s += ': ';
    inp.document.say.EX.focus();
    inp.document.say.EX.value = s;
}
function ntt(s) {
    if (reop) mopnd = 0;
    inp.document.say.EX.focus();
    inp.document.say.EX.value += '[' + s + '] ';
}
function pic(s) {
    inp.document.say.EX.focus();
    inp.document.say.EX.value += '<' + s + '>';
}
function clearinp() {
    hist[nh++] = inp.document.say.EX.value;
    hist[ch = nh] = '';
    inp.document.say.EX.blur();
    if (inp.document.say.x) inp.document.say.x.checked = false;
    showban();
    n3t('');
}