from django.urls import path
from api import views

urlpatterns = [
    # path('companies/', views.company_list),
    # path('companies/<int:company_id>/', views.company_detail),
    # path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    # path('vacancies/', views.vacancy_list),
    # path('vacancies/<int:vacancy_id>/', views.vacancy_detail),
    # path('vacancies/top_ten/', views.top_ten),
    path('companies/', views.CompanyListAPIView.as_view()),
    path('companies/<int:company_id>/', views.CompanyDetailAPIView.as_view()),
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', views.VacancyDetailAPIView.as_view()),
]