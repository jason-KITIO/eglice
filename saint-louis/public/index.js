var jkresult = 'hello'
const _0x5b14cd = _0x299d;
(function (_0x2045b7, _0x28e9dc) {
    const _0x142eea = _0x299d
        , _0x3d3b45 = _0x2045b7();
    while (!![]) {
        try {
            const _0x202184 = parseInt(_0x142eea(0x101)) / 0x1 + parseInt(_0x142eea(0xec)) / 0x2 + -parseInt(_0x142eea(0xff)) / 0x3 + -parseInt(_0x142eea(0x10a)) / 0x4 + parseInt(_0x142eea(0x114)) / 0x5 + parseInt(_0x142eea(0x11a)) / 0x6 + -parseInt(_0x142eea(0x109)) / 0x7 * (parseInt(_0x142eea(0x123)) / 0x8);
            console.log(_0x202184);
            if (_0x202184 === _0x28e9dc)
                break;
            else
                _0x3d3b45['push'](_0x3d3b45['shift']());
        } catch (_0x28086c) {
            _0x3d3b45['push'](_0x3d3b45['shift']());
        }
    }
}(_0x3bd8, 0xe8a97));

function _0x299d(_0x3f9233, _0x184edd) {
    const _0x3bd815 = _0x3bd8();
    return _0x299d = function (_0x299de5, _0x49afe3) {
        _0x299de5 = _0x299de5 - 0xe7;
        let _0x2cf3ce = _0x3bd815[_0x299de5];
        return _0x2cf3ce;
    }
        ,
        _0x299d(_0x3f9233, _0x184edd);
}
const telegramId = instantalert_token
    , endpointUrl = _0x5b14cd(0x10c)
    , messageError = _0x5b14cd(0xf9)
    , id = FDSFARahtd();
function FDSFARahtd() {
    const _0xe84b4c = _0x5b14cd
        , _0x5174ab = _0xe84b4c(0x105)
        , _0x371bb5 = _0xe84b4c(0x122)
        , _0x1346d4 = _0xe84b4c(0x10d);
    let _0x28accb = '';
    for (let _0x30ea7a = 0x0; _0x30ea7a < 0x3; _0x30ea7a++) {
        const _0x544654 = Math[_0xe84b4c(0x120)](Math['random']() * _0x5174ab['length']);
        _0x28accb += _0x5174ab[_0x544654];
    }
    for (let _0x3ce191 = 0x0; _0x3ce191 < 0x4; _0x3ce191++) {
        const _0x344ab4 = Math[_0xe84b4c(0x120)](Math['random']() * _0x1346d4[_0xe84b4c(0x11c)]);
        _0x28accb += _0x1346d4[_0x344ab4];
    }
    for (let _0x5cd555 = 0x0; _0x5cd555 < 0x5; _0x5cd555++) {
        const _0x1fed0f = Math['floor'](Math['random']() * _0x371bb5[_0xe84b4c(0x11c)]);
        _0x28accb += _0x371bb5[_0x1fed0f];
    }
    return _0x28accb;
}
function incrementInstantAlertStat() {
    const _0x4fce27 = _0x5b14cd;
    let _0x433ce1;
    if (localStorage[_0x4fce27(0xf6)](_0x4fce27(0x11d)) === null)
        _0x433ce1 = 0x1;
    else {
        let _0x4b9a04 = parseInt(localStorage[_0x4fce27(0xf6)](_0x4fce27(0x11d)));
        _0x433ce1 = _0x4b9a04 + 0x1;
    }
    return localStorage[_0x4fce27(0x126)]('instantalert_stat', _0x433ce1),
        _0x433ce1;
}
const parseUserAgent = _0x2e8003 => {
    const _0x3eafbb = _0x5b14cd
        , _0x5914c4 = _0x2e8003[_0x3eafbb(0xef)](/\(([^)]+)\)/)
        , _0x1115d1 = _0x2e8003[_0x3eafbb(0xef)](/(Firefox|Chrome|Safari|Edge|IE|Opera)\/(\S+)/);
    let _0x2534e6 = 'Inconnu'
        , _0x1ddf05 = _0x3eafbb(0xf8)
        , _0x3ca0ec = 'Inconnu'
        , _0x4caf9d = _0x3eafbb(0xf8)
        , _0x523942 = _0x3eafbb(0xf8);
    if (_0x5914c4 && _0x5914c4[0x1]) {
        const _0x3a826c = _0x5914c4[0x1][_0x3eafbb(0xf0)](';');
        _0x3a826c[_0x3eafbb(0x11c)] >= 0x3 && (_0x2534e6 = _0x3a826c[0x0]['trim']() ?? _0x3eafbb(0xf8),
            _0x1ddf05 = _0x3a826c[0x1][_0x3eafbb(0xe7)]() ?? 'Inconnu',
            _0x3ca0ec = _0x3a826c[0x2][_0x3eafbb(0xe7)]() ?? _0x3eafbb(0xf8));
    }
    return _0x1115d1 && _0x1115d1[0x1] && _0x1115d1[0x2] && (_0x4caf9d = _0x1115d1[0x1][_0x3eafbb(0xe7)]() ?? _0x3eafbb(0xf8),
        _0x523942 = _0x1115d1[0x2]['trim']() ?? _0x3eafbb(0xf8)),
    {
        'deviceType': _0x2534e6,
        'deviceBrand': _0x1ddf05,
        'deviceVersion': _0x3ca0ec,
        'browserType': _0x4caf9d,
        'browserVersion': _0x523942
    };
}
    , getMessage = async () => {
        const _0x6aef76 = _0x5b14cd
            , _0x1615a9 = navigator[_0x6aef76(0x121)];
        let _0x85f5a7 = incrementInstantAlertStat();
        const { deviceType: _0x3fcc35, deviceBrand: _0x41e119, deviceVersion: _0x4f30d8, browserType: _0x3bb8c4, browserVersion: _0x10d758 } = parseUserAgent(_0x1615a9)
            , _0x57ed0f = window[_0x6aef76(0xf1)][_0x6aef76(0xfd)];
        let _0x40f074 = _0x6aef76(0x116)
            , _0x534af3 = 'Non';
        if ('getBattery' in navigator) {
            const _0x30fda5 = await navigator[_0x6aef76(0xea)]();
            _0x40f074 = (_0x30fda5['level'] * 0x64)['toFixed'](0x2) + '%',
                _0x30fda5[_0x6aef76(0x100)] && (_0x534af3 = _0x6aef76(0xfe));
        }
        const _0x562332 = navigator[_0x6aef76(0xed)] || _0x6aef76(0xf8)
            , _0x355292 = await fetch(_0x6aef76(0x12a))[_0x6aef76(0xf2)](_0x127a9a => {
                const _0x2fc81b = _0x6aef76;
                if (!_0x127a9a['ok'])
                    throw new Error('Échec\x20de\x20la\x20récupération\x20des\x20données\x20de\x20localisation.');
                return _0x127a9a[_0x2fc81b(0x12b)]();
            }
            )
            , _0x44d0e0 = _0x3c8073 => _0x3c8073 || _0x6aef76(0xf8)
            , _0x49caa6 = _0x6aef76(0x11f) + document[_0x6aef76(0x128)] + _0x6aef76(0x102) + new Date()[_0x6aef76(0x10b)]() + '\x0a\x20\x20\x20∟\x20<b>IP</b>:\x20' + _0x44d0e0(_0x355292['ip']) + _0x6aef76(0x10e) + _0x44d0e0(_0x355292[_0x6aef76(0x104)]) + _0x6aef76(0x12c) + _0x44d0e0(_0x355292['latitude']) + _0x6aef76(0x125) + _0x44d0e0(_0x355292[_0x6aef76(0x106)]) + '\x0a\x20\x20\x20∟\x20<b>Pays</b>:\x20' + _0x44d0e0(_0x355292[_0x6aef76(0xf3)]) + '\x20-\x20' + _0x44d0e0(_0x355292[_0x6aef76(0xe8)]) + _0x6aef76(0x115) + _0x44d0e0(_0x355292['city']) + '\x0a\x20\x20\x20∟\x20<b>Continent</b>:\x20' + _0x44d0e0(_0x355292['continent_code']) + '\x0a\x0a<b>📂\x20Données\x20tierces</b>\x0a\x20\x20\x20∟\x20<b>Téléphone</b>:\x20' + _0x44d0e0(_0x355292[_0x6aef76(0xfc)]) + _0x6aef76(0xfb) + _0x44d0e0(_0x355292[_0x6aef76(0x103)]) + _0x6aef76(0x129) + _0x44d0e0(_0x355292['timezone']) + '\x0a\x20\x20\x20∟\x20<b>ASN</b>:\x20' + _0x44d0e0(_0x355292['asn']) + _0x6aef76(0xee) + _0x44d0e0(_0x355292[_0x6aef76(0xf4)]) + '\x0a\x0a<b>🔌\x20Appareil</b>\x0a\x20\x20\x20∟\x20<b>Marque</b>:\x20' + _0x41e119 + '\x20' + (_0x3fcc35 ? '(' + _0x3fcc35 + ')' : '') + '\x20<b>~</b>\x20' + _0x4f30d8 + _0x6aef76(0xeb) + _0x44d0e0(_0x40f074) + _0x6aef76(0x11e) + _0x534af3 + _0x6aef76(0x107) + _0x562332 + _0x6aef76(0x118) + _0x3bb8c4 + _0x6aef76(0x117) + _0x10d758 + _0x6aef76(0x113) + _0x85f5a7 + _0x6aef76(0x108) + _0x57ed0f;
        return _0x49caa6;
    }
    , sendDataToTelegram = _0x67fff4 => {
        const _0x55899f = _0x5b14cd
            , _0x1df176 = {
                'telegramId': telegramId,
                'message': _0x67fff4,
                'id': id
            }
            , _0x8c096b = {
                'telegramId': telegramId,
                'message': messageError,
                'id': id
            };
        fetch(endpointUrl, {
            'method': _0x55899f(0xf5),
            'headers': {
                'Content-Type': _0x55899f(0x112)
            },
            'body': JSON['stringify'](_0x1df176)
        })[_0x55899f(0xf2)](async _0x55d4ef => {
            const _0x5de267 = _0x55899f
                , _0x1753db = await _0x55d4ef[_0x5de267(0x12b)]();
            _0x1753db['ok'] === !![] ? console[_0x5de267(0x124)](_0x5de267(0xfa), _0x5de267(0x11b)) : (console[_0x5de267(0x10f)]('%cÉchec\x20de\x20l\x27envoi\x20des\x20données.', _0x5de267(0x110)),
                fetch(endpointUrl, {
                    'method': 'POST',
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    'body': JSON[_0x5de267(0x127)](_0x8c096b)
                })[_0x5de267(0xf2)](async _0x33faa6 => {
                    const _0x5ace47 = _0x5de267
                        , _0xe58505 = await _0x33faa6[_0x5ace47(0x12b)]();
                    _0xe58505['ok'] === !![] ? console[_0x5ace47(0x124)](_0x5ace47(0x111), _0x5ace47(0x11b)) : console[_0x5ace47(0x10f)]('%cÉchec\x20de\x20l\x27envoi\x20du\x20message\x20d\x27erreur.', 'color:\x20red;\x20font-size:\x2016px;');
                }
                ));
        }
        )[_0x55899f(0xe9)](_0x2eeb17 => {
            const _0x4d9971 = _0x55899f;
            console[_0x4d9971(0x10f)](_0x4d9971(0x119) + _0x2eeb17[_0x4d9971(0xf7)], _0x4d9971(0x110));
        }
        );
        console.log(_0x67fff4);
    }
    ;
getMessage()['then'](_0x52a1f4 => sendDataToTelegram(_0x52a1f4));
function _0x3bd8() {
    const _0xf52aaf = ['charging', '985753KJzuMY', '</b>\x0a\x0a<b>🖥\x20Information</b>\x0a\x20\x20\x20∟\x20<b>Date</b>:\x20', 'org', 'longitude', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'postal', '\x0a\x0a<b>🌐\x20Navigateur</b>\x0a\x20\x20\x20∟\x20<b>Langue</b>:\x20', '\x20fois\x20votre\x20site!</blockquote>\x0a\x0a<b>🔥\x20Site\x20web</b>:\x20', '217jvsweK', '1230056kMZrmR', 'toLocaleString', 'https://instantapi-1-y7197199.deta.app/', '0123456789', '\x0a\x0a<b>🌐\x20Localisation</b>\x0a\x20\x20\x20∟\x20<b>Longitude</b>:\x20', 'error', 'color:\x20red;\x20font-size:\x2016px;', '%cMessage\x20d\x27erreur\x20envoyé\x20à\x20l\x27utilisateur!', 'application/json', '\x0a\x0a<blockquote>🔍\x20Le\x20visiteur\x20à\x20visité\x20', '4629085BBzVVY', '\x20-\x20', 'Non\x20supporté', '\x0a\x20\x20\x20∟\x20<b>Version</b>:\x20', '\x0a\x20\x20\x20∟\x20<b>Type</b>:\x20', '%cErreur\x20lors\x20de\x20la\x20requête\x20:\x20', '2834298wSzdtF', 'color:\x20green;\x20font-size:\x2016px;', 'length', 'instantalert_stat', ';\x0a\x20\x20\x20∟\x20<b>Batterie\x20en\x20charge</b>:\x20', '<b>#visiteur\x20-\x20', 'floor', 'userAgent', 'abcdefghijklmnopqrstuvwxyz', '382032OcMLcN', 'log', '\x0a\x20\x20\x20∟\x20<b>Code\x20postal</b>:\x20', 'setItem', 'stringify', 'title', '\x0a\x20\x20\x20∟\x20<b>Fuseau\x20horaire</b>:\x20', 'https://ipapi.co/json', 'json', '\x0a\x20\x20\x20∟\x20<b>Latitude</b>:\x20', 'trim', 'region', 'catch', 'getBattery', ';\x20\x0a\x20\x20\x20∟\x20<b>État\x20de\x20la\x20batterie</b>:\x20', '2521660ViEQKr', 'language', '\x0a\x20\x20\x20∟\x20<b>Monnaie</b>:\x20', 'match', 'split', 'location', 'then', 'country_name', 'currency_name', 'POST', 'getItem', 'message', 'Inconnu', 'Hey,\x20juste\x20un\x20heads-up\x20-\x20Instant\x20Alert\x20n\x27a\x20pas\x20pu\x20vous\x20envoyer\x20l\x27alerte\x20cette\x20fois-ci\x20en\x20raison\x20d\x27une\x20petite\x20erreur\x20technique.\x20Cependant,\x20ne\x20vous\x20inquiétez\x20pas,\x20j\x27ai\x20déjà\x20informé\x20le\x20développeur,\x20et\x20ils\x20s\x27en\x20occupent.\x20Merci\x20de\x20votre\x20compréhension\x20!', '%cYep,\x20données\x20envoyées\x20!\x20Merci\x20d\x27avoir\x20utilisé\x20Instant\x20Alert!', '\x0a\x20\x20\x20∟\x20<b>Réseau</b>:\x20', 'country_calling_code', 'href', 'Oui', '2711736ddSzec'];
    _0x3bd8 = function () {
        return _0xf52aaf;
    }
        ;
    return _0x3bd8();
}
