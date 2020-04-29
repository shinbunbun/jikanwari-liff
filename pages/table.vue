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
              <div v-for="n in 8" :key="n">
                <tr>
                  <td>{{ n-1 }}</td>
                  <td :id="`mon${n-1}`">none</td>
                  <td :id="`tue${n-1}`">none</td>
                  <td :id="`wed${n-1}`">none</td>
                  <td :id="`thu${n-1}`">none</td>
                  <td :id="`fri${n-1}`">none</td>
                  <td :id="`sat${n-1}`">none</td>
                </tr>
              </div>
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
  },
  mounted() {
    const jikanwari = this.$store.state.jikanwari;
    console.log(jikanwari);

    const mon = jikanwari.mon;
    const tue = jikanwari.tue;
    const wed = jikanwari.wed;
    const thu = jikanwari.thu;
    const fri = jikanwari.fri;
    const sat = jikanwari.sat;
    /// /alert
    console.log(3);
    const monday = (mon.split(/\n/)).slice(1);
    const tuesday = (tue.split(/\n/)).slice(1);
    const wednesday = (wed.split(/\n/)).slice(1);
    const thursday = (thu.split(/\n/)).slice(1);
    const friday = (fri.split(/\n/)).slice(1);
    const saturday = (sat.split(/\n/)).slice(1);

    console.log(monday);

    monday.map((value) => {
      console.log(value);
      try {
        /// /alert
        // console.log(counter);
        // mondayObject[value.slice(0, 1)] = value.slice(2);
        if (value !== 'ありません' && value !== null) {
          document.getElementById(`mon${value.slice(0, 1)}`)
            .textContent = value.slice(2);
        }
        // counter++;
      } catch (e) {
        console.log(e);
      }
    });
    tuesday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          document.getElementById(
                                                        `tue${value.slice(0, 1)}`)
            .textContent = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    wednesday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          document.getElementById(
                                                        `wed${value.slice(0, 1)}`)
            .textContent = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    thursday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          document.getElementById(
                                                        `thu${value.slice(0, 1)}`)
            .textContent = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    friday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          document.getElementById(
                                                        `fri${value.slice(0, 1)}`)
            .textContent = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    saturday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          document.getElementById(
                                                        `sat${value.slice(0, 1)}`)
            .textContent = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
  }
};
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
