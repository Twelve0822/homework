<script setup>
import { ref } from 'vue'
import { useImglinkStore } from '../stores/imglink'
import teamImg from '../assets/team.jpg'

const store = useImglinkStore()

function setImage(imgUrl) {
  store.imglink = imgUrl
}

const titles = ref(['名前', '生年月日', '出身地', '血液型', 'メンバーカラー'])
const memberList = ref([
  {
    name: '岩本照',
    url: 'https://ja.wikipedia.org/wiki/%E5%B2%A9%E6%9C%AC%E7%85%A7',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Hikaru_Iwamoto_Snow_Man.jpg',
    birthday: '1993年5月17日',
    birthplace: '埼玉県',
    bloodType: 'A型',
    memberColor: '黄'
  },
  {
    name: '深澤辰哉',
    url: 'https://ja.wikipedia.org/wiki/%E6%B7%B1%E6%BE%A4%E8%BE%B0%E5%93%89',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Tatsuya_Fukazawa_Snow_Man.jpg',
    birthday: '1992年5月5日',
    birthplace: '東京都',
    bloodType: 'B型',
    memberColor: '紫'
  },
  {
    name: 'ラウール',
    url: 'https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A6%E3%83%BC%E3%83%AB_(%E3%82%A2%E3%82%A4%E3%83%89%E3%83%AB)',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Raul_Snow_Man.jpg',
    birthday: '2003年6月27日',
    birthplace: '東京都',
    bloodType: 'A型',
    memberColor: '白'
  }
])
</script>

<template>
  <dl>
    <dt>
      <h3>メンバー</h3>
    </dt>
    <dd>
      <table>
        <thead>
          <tr>
            <th v-for="t in titles" :key="t">{{ t }}</th>
          </tr>
        </thead>
        <tbody @mouseleave="setImage(teamImg)">
          <tr v-for="member in memberList" :key="member.url" @mouseover="setImage(member.imgUrl)">
            <td>
              <a :href="member.url" target="_blank" rel="noopener">{{ member.name }}</a>
            </td>
            <td>{{ member.birthday }}</td>
            <td>{{ member.birthplace }}</td>
            <td>{{ member.bloodType }}</td>
            <td>{{ member.memberColor }}</td>
          </tr>
        </tbody>
      </table>
    </dd>
  </dl>
</template>

<style scoped>
a {
  color: blue;
}

table {
  border: 2px solid rebeccapurple;
  border-collapse: collapse;
  padding: 40px;
  margin: auto;
}

th,
td {
  padding: 3px;
  border: solid;
}

th {
  background-color: rgba(0, 60, 255, 0.2);
}

tbody tr:hover {
  background-color: hsla(198, 100%, 37%, 0.445);
}
</style>
