import vue from 'Vue'
import Component from 'vue-class-component'

class aComponent extends Vue {

}

@Component
export default class myComponent extends aComponent {
	static callMe(name: string): string { return `Good job ${name}!`; }
}

console.log(myComponent.callMe('Robert Paulson'));