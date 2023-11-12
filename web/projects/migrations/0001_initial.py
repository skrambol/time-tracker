# Generated by Django 3.2.23 on 2023-11-12 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('description', models.CharField(max_length=255)),
                ('date_start', models.DateTimeField()),
                ('date_end', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]