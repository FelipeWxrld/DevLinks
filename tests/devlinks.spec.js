import { test, expect } from '@playwright/test'
import { links, socials } from '../src/data/profile.js'

test('página carrega sem erros no console', async ({ page }) => {
  const errors = []
  page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()))
  page.on('pageerror', (err) => errors.push(err.message))

  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  expect(errors).toEqual([])
})

test('mostra avatar, 4 botões e 4 redes sociais', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('img', { name: /foto de perfil/i })).toBeVisible()
  await expect(page.locator('.link-button')).toHaveCount(4)
  await expect(page.locator('.socials__link')).toHaveCount(4)
})

test('alterna entre tema escuro e claro', async ({ page }) => {
  await page.goto('/')
  const html = page.locator('html')
  const toggle = page.getByRole('switch')

  await expect(html).toHaveAttribute('data-theme', 'dark')
  await toggle.click()
  await expect(html).toHaveAttribute('data-theme', 'light')
  await toggle.click()
  await expect(html).toHaveAttribute('data-theme', 'dark')
})

test('óculos escuros aparecem só no tema claro', async ({ page }) => {
  await page.goto('/')
  const glasses = page.locator('.profile__sunglasses')
  await expect(glasses).not.toHaveClass(/is-on/) // tema escuro: sem óculos
  await page.getByRole('switch').click()
  await expect(glasses).toHaveClass(/is-on/) // tema claro: com óculos
  await page.getByRole('switch').click()
  await expect(glasses).not.toHaveClass(/is-on/)
})

test('tema escolhido continua após recarregar (localStorage)', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('switch').click() // vai para claro
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  expect(await page.evaluate(() => localStorage.getItem('devlinks-theme'))).toBe('light')

  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
})

test('links apontam para os destinos corretos e abrem em nova aba', async ({ page }) => {
  await page.goto('/')
  for (const link of links) {
    const a = page.getByRole('link', { name: link.label })
    await expect(a).toHaveAttribute('href', link.url)
    await expect(a).toHaveAttribute('target', '_blank')
    await expect(a).toHaveAttribute('rel', /noopener/)
  }
  for (const social of socials) {
    await expect(page.getByRole('link', { name: social.label })).toHaveAttribute('href', social.url)
  }
})

test('layout não gera rolagem horizontal', async ({ page }) => {
  await page.goto('/')
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  )
  expect(overflow).toBe(false)
})
