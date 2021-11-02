<template>
  <it-tooltip
    class="tool-tip"
    :content="isFromDate ? getCommentDate() : `${timeSincePost} ago`"
    placement="top"
  >
    <span class="subText grey">
      {{ isFromDate ? `${timeSincePost} ago` : getCommentDate() }}
    </span>
  </it-tooltip>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default {
  name: "UtilityDate",
  props: {
    timestamp: {
      required: true,
      type: Number,
    },
    isFromDate: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timeSincePost: null,
    };
  },
  created() {
    /** NOTE: Opted to use this call here instead of a method to stop date update flash */
    this.timeSincePost = dayjs().from(this.timestamp, true);

    setInterval(
      () => (this.timeSincePost = dayjs().from(this.timestamp, true)),
      30000
    );
  },
  methods: {
    getCommentDate() {
      return dayjs(this.timestamp).format("MM/DD/YYYY h:mm a");
    },
  },
};
</script>

<style scoped>
.tool-tip {
  cursor: pointer;
}
</style>
