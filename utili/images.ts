const ImagesArray: string[] = [
    'icon_01_unit01_miku.png',
    'icon_02_unit01_rin.png',
    'icon_04_unit01_luka.png',
    'icon_05_unit01_meiko.png',
    'icon_06_unit01_kaito.png',
    'icon_01_unit02_ichica.png',
    'icon_02_unit02_saki.png',
    'icon_03_unit02_honami.png',
    'icon_04_unit02_shiho.png',
    'icon_05_unit02_miku.png',
    'icon_06_unit02_luka.png',
    'icon_01_unit03_minori.png',
    'icon_02_unit03_haruka.png',
    'icon_03_unit03_airi.png',
    'icon_04_unit03_shizuku.png',
    'icon_05_unit03_miku.png',
    'icon_06_unit03_rin.png',
    'icon_01_unit04_kohane.png',
    'icon_02_unit04_an.png',
    'icon_03_unit04_akito.png',
    'icon_04_unit04_toya.png',
    'icon_05_unit04_miku.png',
    'icon_06_unit04_len.png',
    'icon_07_unit04_meiko.png',
    'icon_01_unit05_tsukasa.png',
    'icon_02_unit05_emu.png',
    'icon_03_unit05_nene.png',
    'icon_04_unit05_rui.png',
    'icon_05_unit05_miku.png',
    'icon_06_unit05_kaito.png',
    'icon_01_unit06_kanade.png',
    'icon_02_unit06_mafuyu.png',
    'icon_03_unit06_ena.png',
    'icon_04_unit06_mizuki.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png',
    'icon_05_unit06_miku.png'
]

const getRandomIconUrl = () : string => {
    const arrLenght = ImagesArray.length
    const randomId = Math.round(Math.random() * arrLenght)
    return `images/avatar/${ImagesArray[randomId]}`
}

export {
    getRandomIconUrl
}