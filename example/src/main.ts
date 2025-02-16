// 引入样式
import './styles/index.css'

// 引入资源
import bg from './assets/icons/bg.svg?url'

function renderTemplate(root: string) {
  document.querySelector<HTMLDivElement>(root)!.innerHTML = `
    <div class="container" style="background: url(${bg});" >
      <div class="Welcome">
        <div class="title">
          <h3>King3 Website</h3>
        </div>
        <div class="info">
          <p>Welcome use King3 Website.</p>
        </div>
      </div>
    </div>
  `
}

function initApplication() {
  // 渲染模板
  renderTemplate('#app')
}

initApplication()
