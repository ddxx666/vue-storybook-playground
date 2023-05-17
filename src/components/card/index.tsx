import { defineComponent } from "vue";
import styles from './styles.module.less';

const Card = defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'No Title'
    }
  },
  render() {
    return (
      <div class={styles.container}>
        <header>
          <h3>{this.title}</h3>
        </header>
        {this.$slots.default}
      </div>
    )
  }
})

export default Card;
