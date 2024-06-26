# Generated by Django 5.0.3 on 2024-04-12 23:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_alter_seatbook_time'),
    ]

    operations = [
        migrations.CreateModel(
            name='UploadImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('caption', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='images')),
            ],
        ),
        migrations.AlterField(
            model_name='seat',
            name='type',
            field=models.CharField(choices=[('Desk', 'Desk'), ('Couch', 'Couch'), ('Chair', 'Chair'), ('BeanBag', 'BeanBag')], db_column='Type', max_length=255),
        ),
    ]
