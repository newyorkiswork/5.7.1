import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, CreditCard, Truck, Shield, RotateCcw } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopEase</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all your shopping needs. Quality products, competitive prices, and
              exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/new-arrivals" className="text-gray-400 hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="text-gray-400 hover:text-white">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-gray-400 hover:text-white">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white">
                  All Categories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-white">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">We Accept</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-white/10 p-2 rounded">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="bg-white/10 p-2 rounded">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="bg-white/10 p-2 rounded">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="bg-white/10 p-2 rounded">
                <CreditCard className="h-6 w-6" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 mt-6">Download Our App</h3>
            <div className="flex space-x-2">
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20">
                <CreditCard className="h-6 w-6" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20">
                <CreditCard className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-t border-gray-800">
          <div className="flex items-center">
            <Truck className="h-8 w-8 mr-3 text-primary" />
            <div>
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-xs text-gray-400">On orders over $50</p>
            </div>
          </div>

          <div className="flex items-center">
            <RotateCcw className="h-8 w-8 mr-3 text-primary" />
            <div>
              <h4 className="font-semibold">Easy Returns</h4>
              <p className="text-xs text-gray-400">30-day return policy</p>
            </div>
          </div>

          <div className="flex items-center">
            <Shield className="h-8 w-8 mr-3 text-primary" />
            <div>
              <h4 className="font-semibold">Secure Payment</h4>
              <p className="text-xs text-gray-400">100% secure checkout</p>
            </div>
          </div>

          <div className="flex items-center">
            <CreditCard className="h-8 w-8 mr-3 text-primary" />
            <div>
              <h4 className="font-semibold">Flexible Payment</h4>
              <p className="text-xs text-gray-400">Multiple payment options</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ShopEase. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
