<template>
  <v-container column justify-center align-center>
    <v-row class="text-center">
      <v-col>
        <p style="font-size: 30px">時間割編集</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6" md="7">
        <v-row>
          <v-col>
            <p>時間割を編集して下さい。</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>※0時間目(朝テストなど)〜7時間目(部活など)までの時間割とその曜日の持ち物が登録できます。</p>
          </v-col>
        </v-row>
        <br />
        <form id="form" autocomplete="off">
          <div v-for="item in items" :key="item.dayOfWeek">
            <div :class="item.dayOfWeek">
              <p>{{ item.dayOfWeekJa }}</p>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}0`"
                    v-model="item.a"
                    type="text"
                    class="form-control"
                    placeholder="0限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}1`"
                    v-model="item.b"
                    type="text"
                    class="form-control"
                    placeholder="1限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}2`"
                    v-model="item.c"
                    type="text"
                    class="form-control"
                    placeholder="2限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
              </v-row>
              <div class="py-1" />
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}3`"
                    v-model="item.d"
                    type="text"
                    class="form-control"
                    placeholder="3限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}4`"
                    v-model="item.e"
                    type="text"
                    class="form-control"
                    placeholder="4限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}5`"
                    v-model="item.f"
                    type="text"
                    class="form-control"
                    placeholder="5限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
              </v-row>
              <div class="py-1" />
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}6`"
                    v-model="item.g"
                    type="text"
                    class="form-control"
                    placeholder="6限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    :id="`${item.dayOfWeek}7`"
                    v-model="item.h"
                    type="text"
                    class="form-control"
                    placeholder="7限"
                    list="list"
                    @compositionend="update($event.target.id)"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    id="monproperty"
                    v-model="item.property"
                    cols="4"
                    class="form-control"
                    placeholder="持ち物"
                  />
                </v-col>
              </v-row>
            </div>
            <br />
          </div>

          <v-col style="text-align: center">
            <br />
            <v-btn x-large type="button" color="primary" @click="submit()">
              <h4 style="margin: 5px;">送信する</h4>
            </v-btn>
          </v-col>
        </form>
      </v-col>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  components: {
  },
  data () {
    return {
      items: [{
        dayOfWeek: 'mon',
        dayOfWeekJa: '月曜日',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        property: ''
      }, {
        dayOfWeek: 'tue',
        dayOfWeekJa: '火曜日',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        property: ''
      }, {
        dayOfWeek: 'wed',
        dayOfWeekJa: '水曜日',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        property: ''
      }, {
        dayOfWeek: 'thu',
        dayOfWeekJa: '木曜日',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        property: ''
      }, {
        dayOfWeek: 'fri',
        dayOfWeekJa: '金曜日',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        property: ''
      }, {
        dayOfWeek: 'sat',
        dayOfWeekJa: '土曜日',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        property: ''
      }],
      subjects: [],
      userId: ''
    };
  },
  mounted() {
    const jikanwari = this.$store.getters.getJikanwari;
    // console.log(jikanwari);

    const userId = jikanwari.ID;
    this.userId = userId;

    const mon = jikanwari.mon;
    const tue = jikanwari.tue;
    const wed = jikanwari.wed;
    const thu = jikanwari.thu;
    const fri = jikanwari.fri;
    const sat = jikanwari.sat;
    let property;
    if (jikanwari.property) {
      const prop = jikanwari.property;
      property = prop.split(',');
    }
    // console.log(property);
    /// /alert
    // console.log(3);
    const monday = (mon.split(/\n/)).slice(1);
    const tuesday = (tue.split(/\n/)).slice(1);
    const wednesday = (wed.split(/\n/)).slice(1);
    const thursday = (thu.split(/\n/)).slice(1);
    const friday = (fri.split(/\n/)).slice(1);
    const saturday = (sat.split(/\n/)).slice(1);

    // console.log(monday);

    monday.map((value) => {
      // console.log(value);
      try {
        /// /alert
        // console.log(counter);
        // mondayObject[value.slice(0, 1)] = value.slice(2);
        if (value !== 'ありません' && value !== null) {
          const key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][parseInt(value.slice(0, 1), 10)];
          this.items[0][key] = value.slice(2);
        }
        // counter++;
      } catch (e) {
        console.log(e);
      }
    });
    tuesday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          const key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][parseInt(value.slice(0, 1), 10)];
          this.items[1][key] = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    wednesday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          const key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][parseInt(value.slice(0, 1), 10)];
          this.items[2][key] = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    thursday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          const key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][parseInt(value.slice(0, 1), 10)];
          this.items[3][key] = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    friday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          const key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][parseInt(value.slice(0, 1), 10)];
          this.items[4][key] = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    saturday.map((value) => {
      try {
        if (value !== 'ありません' && value !== null) {
          const key = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][parseInt(value.slice(0, 1), 10)];
          this.items[5][key] = value.slice(2);
        }
      } catch (e) {
        // alert
        console.log(e);
      }
    });
    if (property) {
      let counter = 0;
      property.map((value) => {
        // console.log(value);
        try {
          if (value !== '') {
            this.items[counter].property = value;
          }
        } catch (e) {
          // alert
          console.log(e);
        }
        counter++;
      });
    }
  },
  methods: {
    update (id) {
      // console.log(id);
      const newSubject = document.getElementById(`${id}`);
      const subjects = this.subjects;
      if (subjects.find(item => item === newSubject)) {
        return;
      }
      subjects.push(newSubject);
    },
    submit () {
      const jikanwari = this.$store.getters.getJikanwari;
      this.$store.commit('updateLoading', true);
      // eslint-disable-next-line no-undef
      liff.getProfile()
        .then((profile) => {
          const userId = profile.userId;

          // console.log(this.items);

          const mon = [this.items[0].a, this.items[0].b, this.items[0].c, this.items[0].d, this.items[0].e, this.items[0].f, this.items[0].g, this.items[0].h];
          const tue = [this.items[1].a, this.items[1].b, this.items[1].c, this.items[1].d, this.items[1].e, this.items[1].f, this.items[1].g, this.items[1].h];
          const wed = [this.items[2].a, this.items[2].b, this.items[2].c, this.items[2].d, this.items[2].e, this.items[2].f, this.items[2].g, this.items[2].h];
          const thu = [this.items[3].a, this.items[3].b, this.items[3].c, this.items[3].d, this.items[3].e, this.items[3].f, this.items[3].g, this.items[3].h];
          const fri = [this.items[4].a, this.items[4].b, this.items[4].c, this.items[4].d, this.items[4].e, this.items[4].f, this.items[4].g, this.items[4].h];
          const sat = [this.items[5].a, this.items[5].b, this.items[5].c, this.items[5].d, this.items[5].e, this.items[5].f, this.items[5].g, this.items[5].h];
          const property = `${this.items[0].property},${this.items[1].property},${this.items[2].property},${this.items[3].property},${this.items[4].property},${this.items[5].property},`;

          // const uuid = getUniqueStr(1000);

          const json = {
            // eslint-disable-next-line no-undef
            idToken: liff.getIDToken(),
            monday: mon,
            tuesday: tue,
            wednesday: wed,
            thursday: thu,
            friday: fri,
            saturday: sat,
            flag: 0,
            uuid: jikanwari.uuid,
            property

          };

          axios.post('https://vzh9dfwsd1.execute-api.ap-northeast-1.amazonaws.com/prod', ({
            data: json
          }))
            .then((res) => {
              this.$router.push('/edit/complete');
            }).catch((err) => {
              alert(err);
            });
        });
      /* function getUniqueStr (myStrong) {
        let strong = 1000;
        if (myStrong) { strong = myStrong; }
        return new Date().getTime().toString(16) + Math.floor(strong * Math.random())
          .toString(16);
      } */
    }
  }
};
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
