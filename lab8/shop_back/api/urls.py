from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_details),
    path('categories/', views.category_list),
    path('categories/<int:id>/', views.category_details),
    path('categories/<int:id>/products', views.category_products)
]