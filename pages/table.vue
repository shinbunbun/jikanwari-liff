<template>
  <v-container column justify-center align-center>
    <v-row class="text-center">
      <v-col>
        <p style="font-size: 30px">時間割表</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6" md="7" class="text-center">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">時間</th>
                <th class="text-center">月</th>
                <th class="text-center">火</th>
                <th class="text-center">水</th>
                <th class="text-center">木</th>
                <th class="text-center">金</th>
                <th class="text-center">土</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">0</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
              <tr>
                <td class="text-center">1</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
              <tr>
                <td class="text-center">6</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
              <tr>
                <td class="text-center">7</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
                <td class="text-center">数学</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
