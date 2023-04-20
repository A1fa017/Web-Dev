from django.http.response import JsonResponse
from api.models import Product, Category

products = Product.objects.all()
categories = Category.objects.all()

def product_list(request):
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_details(request, id):
    for product in products:
        if product.to_json()['id'] == id:
            return JsonResponse(product.to_json())

    return JsonResponse({'error':'Product not found'})

def category_list(request):
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_details(request, id):
    for category in categories:
        if category.to_json()['id'] == id:
            return JsonResponse(category.to_json())

    return JsonResponse({'error':'Category not found'})

def category_products(request, id):
    products_json = [product.to_json() for product in products if product.to_json()['id'] == id]
    return JsonResponse(products_json, safe=False)