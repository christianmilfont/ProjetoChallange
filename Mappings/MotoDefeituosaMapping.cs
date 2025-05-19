namespace MotoScript_Challange.Mappings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using MotoScript_Challange.Model;


    public class MotoDefeituosaMapping : IEntityTypeConfiguration<MotoDefeituosa>
    {
        public void Configure(EntityTypeBuilder<MotoDefeituosa> builder)
        {
            builder.ToTable("MotosDefeituosas");

            builder.HasKey(m => m.Id);

            builder.Property(m => m.Id)
                .ValueGeneratedOnAdd();

            builder.Property(m => m.nomeMarca)
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(m => m.nomeMoto)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(m => m.placa)
                .IsRequired()
                .HasMaxLength(200);

            builder.Property(m => m.descricao)
                .IsRequired();

            builder.Property(m => m.TipoDefeituoso)
                .IsRequired()
                .HasConversion<string>(); // Salva o enum como texto no banco
        }
    }

