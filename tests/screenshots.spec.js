// Gera as capturas de tela exigidas na entrega: npm run screenshots
// Salva em docs/screenshots/ (desktop e mobile, tema escuro e claro).
import { test } from '@playwright/test'

const sizes = [
  { name: 'desktop', width: 1440, height: 1024 },
  { name: 'mobile', width: 360, height: 800 },
]

for (const size of sizes) {
  for (const theme of ['dark', 'light']) {
    test(`captura ${size.name} ${theme}`, async ({ page }) => {
      await page.setViewportSize({ width: size.width, height: size.height })
      await page.addInitScript((t) => localStorage.setItem('devlinks-theme', t), theme)
      await page.goto('/')
      await page.waitForTimeout(400)
      await page.screenshot({ path: `docs/screenshots/${size.name}-${theme}.png` })
    })
  }
}
