// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 py-12 text-center text-sm text-white/50">
      <p>
        © Shaunak Mukherjee, {new Date().getFullYear()} — Built in a mini-sprint, with care.
      </p>
    </footer>
  )
}
