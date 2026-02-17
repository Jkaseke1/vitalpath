export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-bold text-sm">
                V+
              </span>
              <span className="font-heading font-semibold text-lg text-foreground">VitalPath</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Take control of your blood pressure, blood sugar and weight — simply.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">Product</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#care-team" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Care Team
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">Legal</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Data Ownership
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@vitalpath.app"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  hello@vitalpath.app
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-sm text-primary font-medium transition-colors hover:text-primary/80">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"© 2026 VitalPath. All rights reserved. Patient data is encrypted and protected by your personal code."}
          </p>
        </div>
      </div>
    </footer>
  )
}
