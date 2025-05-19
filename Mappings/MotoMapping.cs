namespace MotoScript_Challange.Mappings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MotoScript_Challange.Model;


    public class MotoMapping : IEntityTypeConfiguration<Moto>
    {
        public void Configure(EntityTypeBuilder<Moto> builder)
        {
            builder.ToTable("Motos");

            builder.HasKey(m => m.id);

            builder.Property(m => m.id)
                .ValueGeneratedOnAdd();

            builder.Property(m => m.nome)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(m => m.descricao)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(m => m.prontaParaUso)
                .IsRequired();

            builder.Property(m => m.semPlaca)
                .IsRequired();

            builder.Property(m => m.chassi)
                .IsRequired();

            builder.Property(m => m.motor)
                .IsRequired();
        }
    }


