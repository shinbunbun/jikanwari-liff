<template>
  <v-container column justify-center align-center>
    <v-row>
      <v-col class="text-center">
        <h2>ヘルプページ</h2>
        <h3>※工事中</h3>
      </v-col>
    </v-row>
    <!--<div class="py-5">
      <div class="container">
        <v-row>
          <v-col>
            <div class="list-group">
              <div class="list-group-item list-group-item-action active">メニュー</div>
              <a href="#今日の時間割" class="list-group-item list-group-item-action">今日の時間割</a>
              <a href="#明日の時間割" class="list-group-item list-group-item-action">明日の時間割</a>
              <a href="#時間割登録" class="list-group-item list-group-item-action">時間割登録</a>
              <a href="#お問い合わせ" class="list-group-item list-group-item-action">お問い合わせ</a>
              <a href="#" class="list-group-item list-group-item-action">
                <details>
                  <summary>第二メニュー</summary>
                  <object>
                    <a href="#プレミアム会員登録" class="list-group-item list-group-item-action">プレミアム会員登録</a>
                    <a href="#時間割共有" class="list-group-item list-group-item-action">時間割共有</a>
                    <a href="#その他の時間割" class="list-group-item list-group-item-action">その他の時間割</a>
                    <a href="#メニューに戻る" class="list-group-item list-group-item-action">メニューに戻る</a>
                    <a href="#その他" class="list-group-item list-group-item-action">その他</a>
                    <a href="#マイページ" class="list-group-item list-group-item-action">マイページ</a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <details>
                        <summary>プレミアム会員</summary>
                        <object>
                          <a href="#運行状況" class="list-group-item list-group-item-action">運行状況</a>
                          <a href="#天気予報" class="list-group-item list-group-item-action">天気予報</a>
                          <a href="#" class="list-group-item list-group-item-action">
                            <details>
                              <summary>登録系</summary>
                              <object>
                                <a
                                  href="#時間割お知らせ機能登録"
                                  class="list-group-item list-group-item-action"
                                >時間割お知らせ機能登録</a>
                                <a href="#路線登録" class="list-group-item list-group-item-action">路線登録</a>
                                <a
                                  href="#天気予報地域登録"
                                  class="list-group-item list-group-item-action"
                                >天気予報地域登録</a>
                              </object>
                            </details>
                          </a>
                        </object>
                      </details>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <details>
                        <summary>削除・解除系</summary>
                        <object>
                          <a
                            href="#時間割お知らせ機能解除"
                            class="list-group-item list-group-item-action"
                          >時間割お知らせ機能解除</a>
                          <a href="#路線削除" class="list-group-item list-group-item-action">路線削除</a>
                          <a
                            href="#天気予報地域削除"
                            class="list-group-item list-group-item-action"
                          >天気予報地域削除</a>
                        </object>
                      </details>
                    </a>
                  </object>
                </details>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <details>
                  <summary>グループでの利用方法</summary>
                  <object>
                    <a
                      href="#グループへの時間割登録"
                      class="list-group-item list-group-item-action"
                    >グループへの時間割登録</a>
                    <a href="#グループで使える機能" class="list-group-item list-group-item-action">グループで使える機能</a>
                  </object>
                </details>
              </a>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>-->
    <v-row>
      <v-col />
      <v-col cols="12" md="6">
        <div class="py-3">
          <h4 id="時間割">今日の時間割</h4>
          <hr />
          <p>今日の時間割を送信します。</p>
          <br />
          <h4 id="明日の時間割">明日の時間割</h4>
          <hr />
          <p>明日の時間割を送信します。</p>
          <br />
          <h4 id="時間割登録">時間割登録</h4>
          <hr />
          <p>
            時間割と持ち物の登録が出来ます。
            <br />友達等から貰った共有IDを持っている方は「はい」を選択して、共有IDを入力してください。持っていない方は「いいえ」を選択して、登録フォームから時間割を登録してください。
          </p>
          <br />
          <h4 id="お問い合わせ">お問い合わせ</h4>
          <hr />
          <p>
            お問い合わせ用アカウントを追加出来ます。
            <br />ご意見ご要望や質問等がございましたらお気軽にお問い合わせください。中の人が手動で返信します。
          </p>
          <br />
          <h2>第二メニュー</h2>
          <hr />
          <br />
          <h4 id="プレミアム会員登録">プレミアム会員登録</h4>
          <hr />
          <p>
            プレミアム会員に登録することができます。
            <br />プレミアム会員が利用できる機能は
            <a href="#プレミアム会員">プレミアム会員</a>から確認できます。
          </p>
          <br />
          <h4 id="時間割共有">時間割共有</h4>
          <hr />
          <p>
            共有IDを発行して友達に渡すことで、その友達も同じ時間割を使うことが出来ます。
            <br />時間割共有の詳しいやり方については以下の動画をご覧下さい。
          </p>
          <div class="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/VpX87h4866E"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <br />
          <h4 id="その他の時間割">その他の時間割</h4>
          <hr />
          <ul>
            <li>曜日指定</li>
            <p>曜日を選択すると、その曜日の時間割を送信します。</p>
            <li>全曜日</li>
            <p>全ての曜日の時間割を送信します。</p>
          </ul>
          <br />
          <h4 id="メニューに戻る">メニューに戻る</h4>
          <hr />
          <p>最初のメニューに戻ります。</p>
          <br />
          <h4 id="その他">その他</h4>
          <hr />
          <ul>
            <li>時間割編集</li>
            <p>登録した時間割を編集することができます。</p>
            <li>時間割削除</li>
            <p>登録した時間割を削除します。</p>
            <li>友達に勧める</li>
            <ul>
              <li>LINEで勧める</li>
              <p>友達に時間割botのアカウントを送信することが出来ます。</p>
              <li>Twitterで勧める</li>
              <p>時間割botの追加用URLをツイート出来ます。</p>
              <li>その他</li>
              <p>時間割botの追加用URL、QRコードを表示します。</p>
              <li>全曜日</li>
              <p>全曜日の時間割を返します。</p>
            </ul>
          </ul>
          <br />
          <h4 id="マイページ">マイページ</h4>
          <hr />
          <p>自分の登録情報を確認することが出来ます。</p>
          <br />
          <h2 id="プレミアム会員">プレミアム会員</h2>
          <hr />
          <br />
          <h4 id="運行状況">運行状況</h4>
          <hr />
          <p>登録した路線の運行状況が確認できます。</p>
          <br />
          <h4 id="天気予報">天気予報</h4>
          <hr />
          <p>登録した地域の天気予報が確認できます。</p>
        </div>
        <br />
        <h3 id="登録系">登録系</h3>
        <hr />
        <br />
        <h4 id="時間割お知らせ機能登録">時間割お知らせ機能登録</h4>
        <hr />
        <p>毎日設定した時間に時間割を配信する、時間割お知らせ機能の登録ができます。</p>
        <br />
        <h4 id="路線登録">路線登録</h4>
        <hr />
        <p>
          路線を登録すると、第二メニューの運行状況から登録した路線の運行状況が確認出来るようになります。
          <br />毎朝6:10に登録した路線の運行情報を配信します。
        </p>
        <br />
        <h4 id="天気予報地域登録">天気予報地域登録</h4>
        <hr />
        <p>
          郵便番号を登録すると，第二メニューの天気予報からその地域の天気予報が確認できるようになります。
          <br />※郵便番号を登録する際は、郵便番号:000-0000
          という形で郵便番号を送信してください。
          <br />毎朝6:00に登録した地域の天気を送信します。
        </p>
        <br />
        <h3 id="削除・解除系">削除・解除系</h3>
        <hr />
        <br />
        <h4 id="時間割お知らせ機能解除">時間割お知らせ機能解除</h4>
        <hr />
        <p>時間割お知らせ機能を解除出来ます。</p>
        <br />
        <h4 id="路線削除">路線削除</h4>
        <hr />
        <p>登録した路線を削除出来ます。</p>
        <br />
        <h4 id="天気予報地域削除">天気予報地域削除</h4>
        <hr />
        <p>登録した郵便番号を削除できます。</p>
        <br />
        <h4 id="グループへの時間割登録">グループへの時間割登録</h4>
        <hr />
        <p>
          時間割Botをグループに招待し、共有IDを送信することで時間割を登録することが出来ます。
          <br />詳しくは
          <a href="#時間割共有">時間割共有</a>の動画をご覧下さい。
        </p>
        <br />
        <h4 id="グループで使える機能">グループで使える機能</h4>
        <hr />
        <ul>
          <li>今日の時間割</li>
          <p>今日の時間割を返します。</p>
          <li>明日の時間割</li>
          <p>明日の時間割を返します。</p>
          <li>全曜日</li>
          <p>全曜日の時間割を返します。</p>
          <li>天気予報地域登録</li>
          <p>
            郵便番号を登録すると，第二メニューの天気予報からその地域の天気予報が確認できるようになります。
            <br />※郵便番号を登録する際は、郵便番号:000-0000
            という形で郵便番号を送信してください。
            <br />毎朝6:00に登録した地域の天気を送信します。
          </p>
          <li>天気予報地域削除</li>
          <p>登録した郵便番号を削除できます。</p>
          <li>天気予報</li>
          <p>登録した地域の天気予報が確認できます。</p>
          <li>路線登録</li>
          <p>
            路線を登録すると、第二メニューの運行状況から登録した路線の運行状況が確認出来るようになります。
            <br />毎朝6:10に登録した路線の運行情報を配信します。
          </p>
          <li>路線削除</li>
          <p>登録した路線を削除出来ます。</p>
          <li>運行状況</li>
          <p>登録した路線の運行状況が確認できます。</p>
          <li>時間割お知らせ機能登録</li>
          <p>毎日設定した時間に時間割を配信する、時間割お知らせ機能の登録ができます。</p>
          <li>時間割お知らせ機能解除</li>
          <p>時間割お知らせ機能を解除出来ます。</p>
          <li>時間割削除</li>
          <p>登録した時間割の削除が出来ます。</p>
        </ul>
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
  }
};
</script>
