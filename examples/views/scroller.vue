<template>
  <div class="container">
    <div class="wrap mt-20 border">
      <s-scroller ref="scroller" @will-bottom="insertItem">
        <p v-for="i in list">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, possimus vel earum officia fugit esse corrupti, sapiente vitae mollitia molestias tenetur laudantium modi, odio voluptate distinctio voluptatum quos dicta. Sapiente.</p>
      </s-scroller>
    </div>
    <s-button @click="click">change data</s-button>

    <div class="mt-20 border">
      <s-scroller>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam exercitationem odit quidem quis ipsam excepturi tempore. Blanditiis dicta fuga sunt quasi ea earum quas recusandae nobis consectetur rerum. Eos!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure veritatis iste vel vitae doloribus quia asperiores incidunt, similique hic quae, excepturi repellendus aliquam numquam odit quod deserunt. Quo, error?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, rem. Non deleniti dolorem laborum. Numquam, voluptatem aliquam obcaecati unde dolor sed, debitis impedit cum molestiae soluta ipsa sunt qui nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla sunt in. Deleniti, modi, voluptate, est sunt reiciendis vero praesentium dicta voluptas laudantium totam ducimus exercitationem repellat minima hic ipsa?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur recusandae, quisquam, alias nisi totam aliquam ducimus quam cupiditate culpa officia sint. Asperiores, voluptatibus at quaerat amet odit perspiciatis quidem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos cumque a, cupiditate illum rem. Pariatur quae, quidem optio eaque animi accusantium atque? Amet impedit modi, doloribus ad reiciendis soluta?
        </div>
      </s-scroller>
    </div>

    <div class="wrap mt-20 border">
      <s-scroller>
        <div class="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam exercitationem odit quidem quis ipsam excepturi tempore. Blanditiis dicta fuga sunt quasi ea earum quas recusandae nobis consectetur rerum. Eos!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure veritatis iste vel vitae doloribus quia asperiores incidunt, similique hic quae, excepturi repellendus aliquam numquam odit quod deserunt. Quo, error?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, rem. Non deleniti dolorem laborum. Numquam, voluptatem aliquam obcaecati unde dolor sed, debitis impedit cum molestiae soluta ipsa sunt qui nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla sunt in. Deleniti, modi, voluptate, est sunt reiciendis vero praesentium dicta voluptas laudantium totam ducimus exercitationem repellat minima hic ipsa?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur recusandae, quisquam, alias nisi totam aliquam ducimus quam cupiditate culpa officia sint. Asperiores, voluptatibus at quaerat amet odit perspiciatis quidem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos cumque a, cupiditate illum rem. Pariatur quae, quidem optio eaque animi accusantium atque? Amet impedit modi, doloribus ad reiciendis soluta?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam exercitationem odit quidem quis ipsam excepturi tempore. Blanditiis dicta fuga sunt quasi ea earum quas recusandae nobis consectetur rerum. Eos!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure veritatis iste vel vitae doloribus quia asperiores incidunt, similique hic quae, excepturi repellendus aliquam numquam odit quod deserunt. Quo, error?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, rem. Non deleniti dolorem laborum. Numquam, voluptatem aliquam obcaecati unde dolor sed, debitis impedit cum molestiae soluta ipsa sunt qui nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla sunt in. Deleniti, modi, voluptate, est sunt reiciendis vero praesentium dicta voluptas laudantium totam ducimus exercitationem repellat minima hic ipsa?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur recusandae, quisquam, alias nisi totam aliquam ducimus quam cupiditate culpa officia sint. Asperiores, voluptatibus at quaerat amet odit perspiciatis quidem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos cumque a, cupiditate illum rem. Pariatur quae, quidem optio eaque animi accusantium atque? Amet impedit modi, doloribus ad reiciendis soluta?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam exercitationem odit quidem quis ipsam excepturi tempore. Blanditiis dicta fuga sunt quasi ea earum quas recusandae nobis consectetur rerum. Eos!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure veritatis iste vel vitae doloribus quia asperiores incidunt, similique hic quae, excepturi repellendus aliquam numquam odit quod deserunt. Quo, error?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, rem. Non deleniti dolorem laborum. Numquam, voluptatem aliquam obcaecati unde dolor sed, debitis impedit cum molestiae soluta ipsa sunt qui nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla sunt in. Deleniti, modi, voluptate, est sunt reiciendis vero praesentium dicta voluptas laudantium totam ducimus exercitationem repellat minima hic ipsa?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur recusandae, quisquam, alias nisi totam aliquam ducimus quam cupiditate culpa officia sint. Asperiores, voluptatibus at quaerat amet odit perspiciatis quidem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos cumque a, cupiditate illum rem. Pariatur quae, quidem optio eaque animi accusantium atque? Amet impedit modi, doloribus ad reiciendis soluta?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam exercitationem odit quidem quis ipsam excepturi tempore. Blanditiis dicta fuga sunt quasi ea earum quas recusandae nobis consectetur rerum. Eos!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure veritatis iste vel vitae doloribus quia asperiores incidunt, similique hic quae, excepturi repellendus aliquam numquam odit quod deserunt. Quo, error?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, rem. Non deleniti dolorem laborum. Numquam, voluptatem aliquam obcaecati unde dolor sed, debitis impedit cum molestiae soluta ipsa sunt qui nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla sunt in. Deleniti, modi, voluptate, est sunt reiciendis vero praesentium dicta voluptas laudantium totam ducimus exercitationem repellat minima hic ipsa?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur recusandae, quisquam, alias nisi totam aliquam ducimus quam cupiditate culpa officia sint. Asperiores, voluptatibus at quaerat amet odit perspiciatis quidem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos cumque a, cupiditate illum rem. Pariatur quae, quidem optio eaque animi accusantium atque? Amet impedit modi, doloribus ad reiciendis soluta?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam exercitationem odit quidem quis ipsam excepturi tempore. Blanditiis dicta fuga sunt quasi ea earum quas recusandae nobis consectetur rerum. Eos!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure veritatis iste vel vitae doloribus quia asperiores incidunt, similique hic quae, excepturi repellendus aliquam numquam odit quod deserunt. Quo, error?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, rem. Non deleniti dolorem laborum. Numquam, voluptatem aliquam obcaecati unde dolor sed, debitis impedit cum molestiae soluta ipsa sunt qui nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla sunt in. Deleniti, modi, voluptate, est sunt reiciendis vero praesentium dicta voluptas laudantium totam ducimus exercitationem repellat minima hic ipsa?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur recusandae, quisquam, alias nisi totam aliquam ducimus quam cupiditate culpa officia sint. Asperiores, voluptatibus at quaerat amet odit perspiciatis quidem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos cumque a, cupiditate illum rem. Pariatur quae, quidem optio eaque animi accusantium atque? Amet impedit modi, doloribus ad reiciendis soluta?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam exercitationem odit quidem quis ipsam excepturi tempore. Blanditiis dicta fuga sunt quasi ea earum quas recusandae nobis consectetur rerum. Eos!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iure veritatis iste vel vitae doloribus quia asperiores incidunt, similique hic quae, excepturi repellendus aliquam numquam odit quod deserunt. Quo, error?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, rem. Non deleniti dolorem laborum. Numquam, voluptatem aliquam obcaecati unde dolor sed, debitis impedit cum molestiae soluta ipsa sunt qui nulla.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla sunt in. Deleniti, modi, voluptate, est sunt reiciendis vero praesentium dicta voluptas laudantium totam ducimus exercitationem repellat minima hic ipsa?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur recusandae, quisquam, alias nisi totam aliquam ducimus quam cupiditate culpa officia sint. Asperiores, voluptatibus at quaerat amet odit perspiciatis quidem.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias eos cumque a, cupiditate illum rem. Pariatur quae, quidem optio eaque animi accusantium atque? Amet impedit modi, doloribus ad reiciendis soluta?</p>
        </div>
      </s-scroller>
    </div>

    <div class="wrap mt-20 border" v-scroller>
      <p v-for="i in data">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, possimus vel earum officia fugit esse corrupti, sapiente vitae mollitia molestias tenetur laudantium modi, odio voluptate distinctio voluptatum quos dicta. Sapiente.</p>
    </div>
    <s-button @click="click">change data</s-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: 20,
      list: [],
      all: []
    }
  },
  created () {
    for (let i = 1; i <= 100; i++) {
      this.all.push(i);
    }
    this.list = this.all.slice(0, 10)
  },
  methods: {
    click () {
      this.data += 20
    },
    insertItem (i) {
      // const arr = this.all.slice(10 * i, 10 + 10 * i);
      this.list = this.all.slice(0, 10 * (i + 1));
      console.log(this.list)
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 80px;
    height: 4000px;
  }
  .mt-20 {
    margin-top: 20px;
  }
  .wrap {
    height: 300px;
  }
  .content {
    width: 3000px;
  }
</style>
