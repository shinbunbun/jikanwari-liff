<template>
  <v-container column justify-center align-center>
    <v-row class="text-center">
      <v-col>
        <p style="font-size: 30px">時間割登録</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col />
      <v-col cols="12" sm="6" md="7">
        <v-row>
          <v-col>
            <p>時間割を入力して下さい。</p>
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
                    :value="`${item.dayOfWeek.a}`"
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
                    :value="`${item.dayOfWeek.a}`"
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
                    :value="`${item.a}`"
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
                    :value="`${item.b}`"
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
                    :value="`${item.c}`"
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
                    :value="`${item.d}`"
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
                    :value="`${item.e}`"
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
                    :value="`${item.f}`"
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
                    :value="`${item.g}`"
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
  methods: {
    update (id) {
      console.log(id);
      const newSubject = document.getElementById(`${id}`);
      const subjects = this.subjects;
      if (subjects.find(item => item === newSubject)) {
        return;
      }
      subjects.push(newSubject);
    },
    submit () {
      // eslint-disable-next-line no-undef
      liff.getProfile()
        .then((profile) => {
          const userId = profile.userId;

          const mon = [this.items[0].a, this.items[0].b, this.items[0].c, this.items[0].d, this.items[0].e, this.items[0].f, this.items[0].g, this.items[0].h];
          console.log(mon);
          const tue = [document.getElementById('tue0').value, document.getElementById('tue1').value, document.getElementById('tue2').value,
            document.getElementById('tue3').value, document.getElementById('tue4').value, document.getElementById('tue5').value, document.getElementById('tue6').value, document.getElementById('tue7').value
          ];
          const wed = [document.getElementById('wed0').value, document.getElementById('wed1').value, document.getElementById('wed2').value, document.getElementById('wed3').value, document.getElementById('wed4').value, document.getElementById('wed5').value, document.getElementById('wed6').value, document.getElementById('wed7').value];
          const thu = [document.getElementById('thu0').value, document.getElementById('thu1').value, document.getElementById('thu2').value, document.getElementById('thu3').value, document.getElementById('thu4').value, document.getElementById('thu5').value,
            document.getElementById('thu6').value, document.getElementById('thu7').value
          ];
          const fri = [document.getElementById('fri0').value, document.getElementById('fri1').value, document.getElementById('fri2').value, document.getElementById('fri3').value, document.getElementById('fri4').value, document.getElementById('fri5').value, document.getElementById('fri6').value, document.getElementById('fri7').value];
          const sat = [document.getElementById('sat0').value, document.getElementById('sat1').value, document.getElementById('sat2').value, document.getElementById('sat3').value, document.getElementById('sat4').value, document.getElementById('sat5').value,
            document.getElementById('sat6').value, document.getElementById('sat7').value
          ];
          const property = `${document.getElementById('monproperty').value},${document.getElementById('tueproperty').value},${document.getElementById('wedproperty').value},${document.getElementById('thuproperty').value},${document.getElementById('friproperty').value},${document.getElementById('satproperty').value},`;

          const uuid = getUniqueStr(1000);

          const json = {
            userId,
            monday: mon,
            tuesday: tue,
            wednesday: wed,
            thursday: thu,
            friday: fri,
            saturday: sat,
            flag: 0,
            uuid,
            property

          };

          axios.post('https://vzh9dfwsd1.execute-api.ap-northeast-1.amazonaws.com/prod', ({
            data: json
          }))
            .then((res) => {
              this.$router.push('/registration/complete');
            }).catch((err) => {
              alert(err);
            });
        });
      function getUniqueStr (myStrong) {
        let strong = 1000;
        if (myStrong) { strong = myStrong; }
        return new Date().getTime().toString(16) + Math.floor(strong * Math.random())
          .toString(16);
      }
    }
  }
};
</script>

<style scoped>
v-btn {
  font-size: 30px;
}
</style>
