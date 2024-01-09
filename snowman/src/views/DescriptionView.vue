<script setup>
import { useImglinkStore } from '../stores/imglink'
import teamImg from '../assets/team.jpg'

const store = useImglinkStore()
store.imglink = teamImg
</script>

<template>
  <dl>
    <dt>
      <h3>説明</h3>
    </dt>
    <dd>
      <p>
        <a href="https://ja.wikipedia.org/wiki/Snow_Man">Snow Man</a
        >は、日本の9人組男性アイドルグループ。所属事務所はSMILE-UP。
      </p>
      <p>
        所属レコードレーベル会社はMENT RECORDING。以前まではavex
        traxに所属していた。2012年5月3日結成。
      </p>
      <p>アクロバットとダンスを得意として、 主に舞台やバラエティ等で幅広く活動している。</p>
      <p>滝沢秀明がプロデュースする初のグループとして、2020年1月22日に『D.D.』でCDデビュー。</p>
    </dd>
  </dl>
  <ul>
    <li>
      <h4>来歴</h4>
    </li>
    <ul>
      <li>ジュニア時代</li>
      <p>
        2009年に前身ユニットである・Mis Snow Manが結成され、2010年から『滝沢歌舞伎 -TAKIZAWA
        KABUKI-』などで本格的に8人で活動を始める。
      </p>
      <p>
        そのうちの深澤辰哉、佐久間大介、渡辺翔太、宮舘涼太、
        岩本照、阿部亮平の6人で2012年5月3日、滝沢秀明の舞台『滝沢歌舞伎2012』では6人がステージに立った際、パフォーマンス中にバックスクリーンの電光掲示板に「Snow
        Man」と突然文字が現れ、本人達にもサプライズで正式にグループ名が発表され、グループ結成に至る。名付け親も滝沢秀明。
      </p>
      <li>デビュー以降</li>
      <p>
        2020年1月22日に発売されたデビューシングル『D.D./Imitation
        Rain』は発売初日に77.3万枚を売り上げ、1月21日付オリコンデイリーランキングで初登場1位を記録。
      </p>
      <p>
        発売3日目の1月23日付オリコンデイリーシングルランキングでは累積枚数109.4万枚を売り上げ、ミリオンを達成。ウィークリーチャートでも初登場1位を獲得し、史上初のデビューシングル初週ミリオンを達成した。2月1日にはタイ・バンコクにグループ初の海外遠征。「JAPAN
        EXPO THAILAND 2020」に出演し、デビュー曲「D.D.」を含めた4曲を披露した。
      </p>
    </ul>
  </ul>
</template>
